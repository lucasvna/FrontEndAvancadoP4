import React, { useState } from 'react'

const HookContador = () => {

    const [contador, setContador] = useState(0);
   
    function incrementaContator() {
        setContador(contador + 1)
    }
    
    function decrementaContador() {
        setContador(contador - 1)
    }

   return (

    <div>
        <h1>Contador com useState</h1>
        <h1>O contador está em {contador}</h1>
        <button onClick={incrementaContator}> Incrementar Contador</button>
        <br></br> <br></br>
        <button onClick={decrementaContador}>Decrementar contador</button>
    </div>

  )
}

export default HookContador