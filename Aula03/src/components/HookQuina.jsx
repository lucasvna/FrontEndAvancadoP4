import React from "react";
import { useState } from "react";

const HookQuina = () => {
    const [numero, setNumero] = useState(null);
    const [lista, setLista] = useState([]);

    function sortearNumero() {
        if (lista.length >= 5) {
            return alert("Já temos 5 números sorteados!");
        }

        let novoNumero;

        do {
            novoNumero = Math.floor(Math.random() * 80) + 1;
        } while (lista.includes(novoNumero));

        setNumero(novoNumero);
        setLista([...lista, novoNumero]);
    }

    return (
        <div>
            <h3>Sorteador da Quina em React!</h3>
            <button onClick={sortearNumero}>Sortear Numero</button>
            <h3>Último numero sorteado: {numero}</h3>
            <h3>Sorteados: {lista.join(" - ")}</h3>
        </div>
    );
};

export default HookQuina;
