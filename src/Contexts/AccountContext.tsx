import { createContext, useContext, useState} from 'react';
import { ContextCommonProps } from './ContextCommonProps';
import { login } from '../Services/AccountService';
import { AccountLogin } from '../CommonInterfaces/AccountLogin';

interface AccountContextType {
  userId: string;
  userName: string;
  pictureUrl: string;
  token: string;
  setLogin: (userName: string, password: string) => Promise<void>;
  isAuthenticated: () => boolean;
  logout: () => void;
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
    }
    catch(ex: any){
        console.log("Ocorreu um erro! ",ex.message);
    }
  }

  function isAuthenticated(): boolean {
    return token !== '' && userId !== '';
  }

  function logout(): void {
    setUserId('');
    setUserName('');
    setPictureUrl('');
    setToken('');
  }

  return (
      <AccountContext.Provider value={{userId,userName,pictureUrl,token, setLogin,isAuthenticated,logout}}>
        {children}
      </AccountContext.Provider>
    );
};

export const useAccount = () => {
  const context = useContext(AccountContext);

  if(!context){
    throw new Error('useAccount deve ser usado dentro de um AccountContextProvider');
  }
  
  return context;
}


export {AccountContext};
export default AccountContext;