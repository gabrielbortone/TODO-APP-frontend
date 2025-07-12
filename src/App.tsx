import { Route, Routes } from 'react-router-dom';
import { About } from './Pages/About';
import { Home } from './Pages/Home';
import { GlobalStyledStyle } from './Components/GlobalStyles';
import { DefaultWrapper } from './Components/DefaultComponents';
import MenuBar from './Components/MenuBar';
import Settings from './Pages/Settings';
import Categories from './Pages/Categories';
import { AccountContextProvider } from './Contexts/AccountContext';
import { TodoContextProvider } from './Contexts/ToDoContext';
import Login from './Pages/Account/Login';
import Register from './Pages/Account/Register';
import ProtectedRoute from './Pages/ProtectedRoute';

function App() {

  return (
    <>
      <GlobalStyledStyle />
      <MenuBar />
      <DefaultWrapper>
        <AccountContextProvider>
          <TodoContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
              <Route path="/categories" element={<ProtectedRoute><Categories /></ProtectedRoute>} />
              <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
            </Routes>
          </TodoContextProvider>
        </AccountContextProvider>
      </DefaultWrapper>
    </>
  )

}

export default App
