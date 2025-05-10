import { Route, Routes } from 'react-router-dom';
import { About } from './Pages/About';
import { Home } from './Pages/Home';
import { GlobalStyledStyle } from './Components/GlobalStyles';
import { DefaultWrapper } from './Components/DefaultComponents';
import MenuBar from './Components/MenuBar';
import Settings from './Pages/Settings';
import Categories from './Pages/Categories';

function App() {

  return (
    <>
      <GlobalStyledStyle />
      <MenuBar />
      <DefaultWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </DefaultWrapper>
    </>
  )

}

export default App
