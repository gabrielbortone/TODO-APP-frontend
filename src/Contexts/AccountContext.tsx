import { createContext, useState} from 'react';
import { ContextCommonProps } from './ContextCommonProps';
import { login } from '../Services/AccountService';
import { AccountLogin } from '../CommonInterfaces/AccountLogin';

interface AccountContextType {
  setLogin: (userName: string, password: string) => {}
}

const AccountContext = createContext<AccountContextType | null>(null);

export const AccountContextProvider = ({ children }: ContextCommonProps) => {
  const [userId, setUserId] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [pictureUrl, setPictureUrl] = useState<string>('')
  const [token, setToken] = useState<string>('');

  async function setLogin(userName: string, password: string){
    try{
        const loginRequest : AccountLogin = {
            userName,
            password
        }

        const result = await login(loginRequest)
        if('token' in result){
            setUserId(result.userId)
            setUserName(result.userName)
            setPictureUrl(result.pictureUrl)
            setToken(result.token)
        }

    }catch(ex: any){
        console.log("Ocorreu um erro! ",ex.message);
    }

  }

  return (
      <AccountContext.Provider value={{setLogin}}>
        {children}
      </AccountContext.Provider>
    );
};


export {AccountContext};
export default AccountContext;