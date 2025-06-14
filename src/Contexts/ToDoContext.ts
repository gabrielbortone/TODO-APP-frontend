import { createContext,  useEffect, useState} from 'react';
import { TodoItem } from '../CommonInterfaces/TodoItem';
import { getTodos } from '../Services/TodosService';
import { ToDoItemGet } from '../CommonInterfaces/ToDoItemGet';
import { ProviderProps } from './ProviderProps';
import { PaginationResult } from '../CommonInterfaces/PaginationResult';

interface TodoContextType {
  todos: TodoItem[];
  loading: boolean;
  error: string | null;
  addTodo: (title: string, description: string, dueDate: null | Date) => Promise<void>;
  toggleComplete: (id: string) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
  updateTodo(title: string, description: string, dueDate: Date | null, completedDate: Date | null) => Promise<void>;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const ToDoContextProvider :React.FC<ProviderProps> = ({children}) => {
    const [todos, setTodos] = useState<ToDoItemGet[]>([]);
    const [pagination, setPagination] = useState<PaginationResult>()
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTodos = async () => {
        try {
            const fetchedTodos = await getTodos("","Title","desc",1,10,null,null,null,null);
            setTodos(fetchedTodos.data)
            setPagination(fetchedTodos.pagination)
        } catch (err: any) {
            setError(err.message || 'Erro ao carregar tarefas.');
        } finally {
            setLoading(false);
        }
    };

    fetchTodos();
  }, []);

  const addTodo = async (title: string, description: string, priority:number, dueDate: Date | null, categoryId: string) => {
    setLoading(true);
    setError(null);
    try {
      // JSONPlaceholder precisa de um userId para POST
      // e ignorará description/dueDate/completedDate.
      const newTodoItem: TodoItem = {
        title,
        description,
        dueDate,
        finishDate: null,
        categoryId
      };

      const addedTodo = await todoService.addTodo(newTodoData);
      setTodos((prevTodos) => [addedTodo, ...prevTodos]);
    } catch (err: any) {
      setError(err.message || 'Erro ao adicionar tarefa.');
    } finally {
      setLoading(false);
    }
  };

  // Função para alternar o status de conclusão de uma tarefa
  const toggleComplete = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const todoToUpdate = todos.find((todo) => todo.id === id);
      if (!todoToUpdate) {
        throw new Error('Tarefa não encontrada para atualização.');
      }

      const isCompleted = !todoToUpdate.completed;
      const newCompletedDate = isCompleted ? new Date() : null;

      const updatedTodoData: TodoItem = {
        ...todoToUpdate,
        completed: isCompleted,
        completedDate: newCompletedDate,
      };

      const updatedTodo = await todoService.updateTodo(updatedTodoData);
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
      );
    } catch (err: any) {
      setError(err.message || 'Erro ao atualizar tarefa.');
    } finally {
      setLoading(false);
    }
  };

  // Função para deletar uma tarefa
  const deleteTodo = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      await todoService.deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (err: any) {
      setError(err.message || 'Erro ao deletar tarefa.');
    } finally {
      setLoading(false);
    }
  };

  // Novo método para atualização completa de uma tarefa
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
        ...todoToUpdate, // Mantém o ID e o userId
        title,
        description,
        dueDate,
        completed: completedDate !== null, // Se completedDate existe, está completo
        completedDate,
      };

      const updatedTodo = await todoService.updateTodo(updatedTodoData);
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
      );
    } catch (err: any) {
      setError(err.message || 'Erro ao atualizar tarefa.');
    } finally {
      setLoading(false);
    }
  };


  // O valor que será fornecido a todos os componentes filhos
  const contextValue: TodoContextType = {
    todos,
    loading,
    error,
    addTodo,
    toggleComplete,
    deleteTodo,
    updateTodo, 
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>
  );
}