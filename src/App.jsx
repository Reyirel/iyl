import { useState } from 'react'
import Navegacion from './components/Navegacion'
import Principal from './secciones/Principal'
import Chats from './secciones/Chats'
import Galeria from './secciones/Galeria'
import Musica from './secciones/Musica'
import Cuentos from './secciones/Cuentos'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navegacion />
      <Principal />
      <Chats />
      <Galeria />
      <Musica />
    </>
  )
}

export default App
