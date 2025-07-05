import { AccountRegister } from '../CommonInterfaces/AccountRegister';
import { ToDoGeneralResume } from '../CommonInterfaces/ToDoGeneralResume';
import { ValidationResult } from '../CommonInterfaces/ValidationResult';
import { api, getAxiosError } from '../lib/axios/axios'
import { AccountResume } from '../CommonInterfaces/AccountResume';
import { AccountLogin } from '../CommonInterfaces/AccountLogin';
import { TokenJwtResponse } from '../CommonInterfaces/TokenJwtResponse';


export const login = async (req: AccountLogin) => {
  try{
    const response = await api.post<TokenJwtResponse|ValidationResult>("/login", req) 
    return response.data;
  }catch(error){
    const responseError = getAxiosError()  
    if (responseError.isAxiosError(error)) {
      throw new Error(`Erro na criação: ${responseError.error.name}`);
    }
    throw error;
  }
};

export async function createAccount (req: AccountRegister){
  try{
    const response = await api.post<AccountResume|ValidationResult>("/users", req) 
    return response.data;
  }catch(error){
    const responseError = getAxiosError()  
    if (responseError.isAxiosError(error)) {
      throw new Error(`Erro na criação: ${responseError.error.name}`);
    }
    throw error;
  }
};

export const getAccountResume = async () => {
  try{
        const response = await api.post<AccountResume|ValidationResult>("/aboutme") 
        return response.data;
  }catch(error){
        const responseError = getAxiosError()  
        if (responseError.isAxiosError(error)) {
            throw new Error(`Erro na criação: ${responseError.error.name}`);
        }
        throw error;
  }
};

export const updateAccount = async (id: string,req: AccountRegister) => {
   try{
    const response = await api.put<ToDoGeneralResume|ValidationResult>("/users", req) 
    return response.data;
  }catch(error){
    const responseError = getAxiosError()  
    if (responseError.isAxiosError(error)) {
      throw new Error(`Erro na criação: ${responseError.error.name}`);
    }
    throw error;
  }
};

export const deleteAccount = async (id: string) => {
    try{
    const response = await api.delete(`/users/${id}`,) 
    return response.data;
  }catch(error){
    const responseError = getAxiosError()  
    if (responseError.isAxiosError(error)) {
      throw new Error(`Erro na criação: ${responseError.error.name}`);
    }
    throw error;
  }
};

