import React from "react";

import Adicao from "./components/Adicao";
import Subtracao from "./components/Subtracao";
import Multiplicacao from "./components/Multiplicacao";
import Divisao from "./components/Divisao";
import PrecisoEstudar from "./components/PrecisoEstudar";


function App() {

    return (

        <>

            <h1>Exercícios Aula 1 React - Tecnologias Avançadas para Front End</h1>
            <p>Prof. Kelson</p>
            <p>Aluno: Lucas Viana de Abrantes</p>
            <hr />

            <h3>Exercício 1</h3>

            <Adicao num1={10} num2={10}></Adicao>
            <br />

            <Divisao num1={20} num2={25}></Divisao>
            <br />

            <Multiplicacao num1={10} num2={999}></Multiplicacao>
            <br />

            <Subtracao num1={10} num2={9}></Subtracao>
            <br />

            <br />
            <hr />
            <h3>Exercício 2</h3>
            <p>Exercicio: No React, crie um componente  chamado “PrecisoEstudar.jsx</p>

            <PrecisoEstudar nomeDaTecnologia={"Assembly e Linux"}></PrecisoEstudar>
            <br />

        </>

    );

}

export default App;