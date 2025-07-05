import { createContext, useEffect, useState } from 'react';
import { TodoItem } from '../CommonInterfaces/TodoItem';
import { createTodo, getTodos, updateTodo, deleteTodo } from '../Services/TodosService'; 
import { PaginationResult } from '../CommonInterfaces/PaginationResult';
import { ContextCommonProps } from './ContextCommonProps';

interface TodoContextType {
  todos: TodoItem[];
  loading: boolean;
  error: string | null;
  addTodo: (title: string, description: string, priority: number, dueDate: Date | null, categoryId: string) => Promise<void>;
  toggleComplete: (id: string) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
  updateTodo: (id: string, title: string, description: string, dueDate: Date | null, completedDate: Date | null) => Promise<void>;
}

const TodoContext = createContext<TodoContextType | null>(null);

export const TodoContextProvider: React.FC<ContextCommonProps> = ({children} : ContextCommonProps) => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [pagination, setPagination] = useState<PaginationResult | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      try {
        const fetchedTodos = await getTodos("", "Title", "desc", 1, 10, null, null, null, null);
        setTodos(fetchedTodos.data);
        setPagination(fetchedTodos.pagination);
      } catch (err: any) {
        setError(err.message || 'Erro ao carregar tarefas.');
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async (
    title: string, 
    description: string, 
    priority: number,
    dueDate: Date | null, 
    categoryId: string
  ) => {
    setLoading(true);
    setError(null);
    try {
      const newTodoItem: TodoItem = {
        title,
        description,
        priority,
        dueDate,
        finishDate: null,
        categoryId
      };

      const addedTodo = await createTodo(newTodoItem);
      if(addedTodo && 'id' in addedTodo){
        setTodos((prevTodos) => [addedTodo, ...prevTodos]);
      }
    } catch (err: any) {
      setError(err.message || 'Erro ao adicionar tarefa.');
    } finally {
      setLoading(false);
    }
  };

  const toggleComplete = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const todoToUpdate = todos.find((todo) => todo.id === id);
      if (!todoToUpdate) {
        throw new Error('Tarefa não encontrada para atualização.');
      }

      const isCompleted = !!todoToUpdate.finishDate;
      const newCompletedDate = isCompleted ? null : new Date();

      const updatedTodoData: TodoItem = {
        ...todoToUpdate,
        finishDate: newCompletedDate,
      };
      const updatedTodoItemId = updatedTodoData.id;

      if(updatedTodoItemId){
        const updatedTodo = await updateTodo(updatedTodoItemId, updatedTodoData.title,updatedTodoData.description,updatedTodoData.dueDate,updatedTodoData.finishDate); 

        if(todos && updatedTodoData){
          setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? updatedTodoData : todo)));
        }
      }
      
      throw new Error("Invalid Id")
      
    } catch (err: any) {
      setError(err.message || 'Erro ao atualizar tarefa.');
    } finally {
      setLoading(false);
    }
  };

  const deleteTodo = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      await deleteTodo(id); 
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (err: any) {
      setError(err.message || 'Erro ao deletar tarefa.');
    } finally {
      setLoading(false);
    }
  };

  const updateTodo = async (
    id: string,
    title: string,
    description: string,
    dueDate: Date | null,
    completedDate: Date | null
  ) => {
    setLoading(true);
    setError(null);
    try {
      const todoToUpdate = todos.find((todo) => todo.id === id);
      if (!todoToUpdate) {
        throw new Error('Tarefa não encontrada para atualização.');
      }

      const updatedTodoData: TodoItem = {
        ...todoToUpdate,
        title,
        description,
        dueDate,
        finishDate: completedDate, 
      };

      const updatedTodo = await updateTodo(id,title,description,dueDate,completedDate); 

      if(todos && updatedTodoData){
        setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? updatedTodoData : todo)));
      }
    } catch (err: any) {
      setError(err.message || 'Erro ao atualizar tarefa.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <TodoContext.Provider value={{todos,loading,error,addTodo,toggleComplete,deleteTodo,updateTodo}}>
      {children}
    </TodoContext.Provider>
  );
};

export {TodoContext};
export default TodoContext;