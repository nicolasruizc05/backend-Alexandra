import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './Login'
import Registro from './Registro'
import Dashboard from './Dashoard'
import Productos from './Productos'
import Contacto from './Contacto'


function App() {
  

  return (
 <BrowserRouter>
 <Routes>
  <Route path='/'element={<Login></Login>}></Route>
  <Route path='/registro'element={<Registro></Registro>}></Route>
  <Route path='/dashboard'element={<Dashboard></Dashboard>}></Route>
  <Route path='/productos'element={<Productos></Productos>}></Route>
  <Route path='/contacto'element={<Contacto></Contacto>}></Route>
 </Routes>
 </BrowserRouter>
  )
}

export default App
