import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home.jsx'
import { Navbar } from './components/pages/Navbar.jsx';
import { Skills } from './components/pages/Skills.jsx';

export const App = () => {
  return (
  
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
      </Routes>
    </BrowserRouter>
      
    
  )
}
