import './App.css'
// import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Nosotros from './Pages/Nosotros'

import Footer from './Components/Footer'
import Botones from './Components/Botones'
import Promociones from './Pages/Promociones'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Nosotros />} path='/nosotros' />
        <Route element={<Promociones />} path='/promociones' />
      </Routes>
      <Botones />
      <Footer />
    </>
  )
}

export default App
