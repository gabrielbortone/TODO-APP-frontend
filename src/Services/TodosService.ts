import { GetItemsResult } from '../CommonInterfaces/GetItemsResult';
import { TodoItem } from '../CommonInterfaces/TodoItem';
import { ToDoItemGet } from '../CommonInterfaces/ToDoItemGet';
import { ValidationResult } from '../CommonInterfaces/ValidationResult';
import {api, getAxiosError} from '../lib/axios/axios'

export const getTodos = async (
        search: string,
        orderBy: string,
        orderDirection: string,
        page: number,
        itemsPerPage: number,
        priority: number | null,
        dueDate: Date | null,
        finishDate: Date | null,
        includeCompleted: boolean | null) : Promise<GetItemsResult> => {
    try{
        const response = await api.get<GetItemsResult>(`/todos/`,{
            params: {
                search,
                orderBy,
                orderDirection,
                page,
                itemsPerPage,
                priority,
                dueDate,
                finishDate,
                includeCompleted
            }
        }) 

        return response.data;

      }
      catch(error){

        const responseError = getAxiosError()  
        if (responseError.isAxiosError(error)) {
          throw new Error(`Erro na criação: ${responseError.error.name}`);
        }

        throw error;
      }
};

export const createTodo = async (newTodoItem: TodoItem) => {
    try{
        const response = await api.post<ValidationResult|ToDoItemGet>(`/todos/`, newTodoItem) 
        const data = response.data;

        if('id' in data){
          const itemCreated: TodoItem = {
            id: data.id,
            title: data.title,
            description: data.description,
            priority: data.priority,
            dueDate: data.dueDate,
            finishDate: data.finishDate,
            categoryId: data.categoryId,
            categoryName: data.categoryName,
            categoryDescription: data.categoryDescription,
            isTempDeleted: false
          }
          return itemCreated;
        }
      }
      catch(error){

        const responseError = getAxiosError()  
        if (responseError.isAxiosError(error)) {
          throw new Error(`Erro na criação: ${responseError.error.name}`);
        }

        throw error;
      }
};

export const updateTodo = async (updatedItem: TodoItem) => {
   try{
       const params = {
        id: updatedItem.id,
        title: updatedItem.title,
        description: updatedItem.description,
        priority: updatedItem.priority,
        categoryId: updatedItem.categoryId,
        dueDate: updatedItem.dueDate,
        isCompleted: updatedItem.finishDate != null
      }

      const response = await api.put<ValidationResult|null>(`/todos/${updatedItem.id}`, params)
      if(response.data){
        throw new Error(`Erro na Update!!!`);
      }
    }
    catch(error){
        const responseError = getAxiosError()  
        if (responseError.isAxiosError(error)) {
          throw new Error(`Erro na Update: ${responseError.error.name}`);
        }

        throw error;
      }
};

export const deleteTodo = async (id: string) => {
  try{
        const response = await api.delete(`/todos/${id}`) 
        return response.data;
      }
      catch(error){

        const responseError = getAxiosError()  
        if (responseError.isAxiosError(error)) {
          throw new Error(`Erro na criação: ${responseError.error.name}`);
        }

        throw error;
      }
};