import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Menu from './components/Menu'
import TablaUsuarios from './components/usuario/TablaUsuarios'
import TablaAutores from './components/autores/TablaAutores'
import TablaCategorias from './components/categorias/TablaCategorias'
import TablaLibros from './components/libros/TablaLibros'
import TablaPrestamos from './components/prestamos/TablaPrestamos'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu></Menu>}></Route>
          <Route path='/usuarios' element={<TablaUsuarios></TablaUsuarios>}></Route>
          <Route path='/autores' element={<TablaAutores></TablaAutores>}></Route>
          <Route path='/categorias' element={<TablaCategorias></TablaCategorias>}></Route>
          <Route path='/libros' element={<TablaLibros></TablaLibros>}></Route>
          <Route path='/prestamos' element={<TablaPrestamos></TablaPrestamos>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
