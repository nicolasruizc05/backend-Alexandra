import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
//
import Login from './login'
import Registro from './Registro'
import Dashboard from './Dashboard'
import Nav from './Nav'
import Usuario from './Usuario'

function App() {


  return (
    
    <BrowserRouter>
    <Nav></Nav>
      <Routes>
        <Route path='/'element={<Login></Login>}></Route>
        <Route path='/logeo'element={<Login></Login>}></Route>
        <Route path='/registro'element={<Registro></Registro>}></Route>
        <Route path='/dash'element={<Dashboard></Dashboard>}></Route>
        <Route path='/usuario'element={<Usuario></Usuario>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
