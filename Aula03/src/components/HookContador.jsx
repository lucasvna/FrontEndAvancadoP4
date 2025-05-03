import React, { useState } from "react";

function HookContador() {
    const [contador, setContador] = useState(1);

    function incrementarContador() {
        setContador(contador + 1);
    }

    function decrementarContador() {
        setContador(contador - 1);
    }

    return (
        <div>
            <h3>Contador com useState</h3>
            <button onClick={incrementarContador}>Incrementar Valor</button>
            <br />
            <button onClick={decrementarContador}>Decrementar Valor</button>
            <h3>O contador esta em {contador}</h3>
        </div>
    );
}

export default HookContador;
