import axios, {AxiosResponse, AxiosError, isAxiosError} from 'axios'

export function getAxiosError(){
  return {
    isAxiosError,
    error: AxiosError
  }
}

export const api = axios.create({
  baseURL: 'https://localhost:5000/',
  timeout: 4000,
  headers: {
    'Content-Type': 'application/json'
  }
})