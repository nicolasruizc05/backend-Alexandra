import { Container } from 'react-bootstrap'
import './App.css'
import Inicio from './components/Inicio'
import Informacion from './components/Informacion'
import Solicitudes from './components/Solicitudes'

function App() {

  return (
    <Container>
      <main>
        <h1>Consumo de API con React</h1>
      </main>
      <hr />
      <Inicio></Inicio>
      <hr />
      <Informacion></Informacion>
      <hr />
      <Solicitudes></Solicitudes>
      <hr />
    </Container>
  )
}

export default App
