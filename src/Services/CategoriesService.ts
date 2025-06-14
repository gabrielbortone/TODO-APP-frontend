import { Category } from '../CommonInterfaces/Category';
import {api} from '../lib/axios/axios'

export const getCategories = async () => {
    const response = await api.get<Category[]>("/categories")
    console.log(response.data)
    return response.data
};
