import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Efecto from './Efecto'
import Hook from './Hook'
import TablaRoles from './TablaRoles'
import TablaUsuarios from './TablaUsuarios'
import Menu from './Nav'

function App() {

  return (
    <>
      <BrowserRouter>
      <Menu></Menu>
        <Routes>
          <Route path='/efecto' element={<Efecto></Efecto>}></Route>
          <Route path='/hook' element={<Hook></Hook>}></Route>
          <Route path='/rol' element={<TablaRoles></TablaRoles>}></Route>
          <Route path='/usuarios' element={<TablaUsuarios></TablaUsuarios>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App