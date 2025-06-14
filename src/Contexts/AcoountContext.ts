import { createContext, ReactNode, useState} from 'react';

interface AccountContextType {
  token: string;
  setToken: (token: string) => void;
}

interface AccountContextProviderProps {
  children: ReactNode;
}

const AccountContext = createContext<AccountContextType>({
  token: '',
  setToken: () => {}
});

export const AccountContextProvider = ({ children }: AccountContextProviderProps) => {
  const [token, setToken] = useState<string>('');
  
  return (
    
  )
};
