import React from "react";
import { useState } from "react";

const HookMegaSena = () => {
    const [numero, setNumero] = useState(null);
    const [lista, setLista] = useState([]);

    function sortearNumero() {
        if (lista.length >= 6) {
            return alert("Já temos 6 números sorteados!");
        }

        let novoNumero;

        do {
            novoNumero = Math.floor(Math.random() * 60) + 1;
        } while (lista.includes(novoNumero));

        setNumero(novoNumero);
        setLista([...lista, novoNumero]);
    }

    return (
        <div>
            <h3>Sorteador da Mega em React!</h3>
            <button onClick={sortearNumero}>Sortear Numero</button>
            <h3>Último numero sorteado: {numero}</h3>
            <h3>Sorteados: {lista.join(" - ")}</h3>
        </div>
    );
};

export default HookMegaSena;
