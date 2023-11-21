

import { useState } from "react"

function App() {
  const [numero, setNumero ] = useState(0)
  return (
    <>
    <button onClick={()=> setNumero(numero+1)}>+</button>
    <p>{numero}</p>
    <button onClick={()=> setNumero(numero-1)}>-</button>

    </>
  )
}

export default App

