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

export const updateTodo = async () => {
 
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