import React from "react";
import EstouConseguindoAprenderReact from "./components/EstouConseguindoAprenderReact";
import Aluno from "./components/Aluno";
import NovoAluno from "./components/NovoAluno";
import EstaComSono from "./components/EstaComSono";

const App = () => {

    const alunos = [

        {nome: "Danilo", email: "lucas@exemplo.com", curso: "Veterinária"},
        {nome: "Roberto", email: "murilo@exemplo.com", curso: "Ciências da Computação"},
        {nome: "Lucas", email: "marina@exemplo.com", curso: "Sistemas de Informação"}

    ];

    const novoAlunos = [

        {nome: "João", email: "lucas@exemplo.com", curso: "Veterinária", media: "9.5"},
        {nome: "Kevin", email: "malu@exemplo.com", curso: "Sistemas de Informação", media: "6.0"},
        {nome: "Nicole", email: "eric@exemplo.com", curso: "Engenharia", media: "8.0"}

    ];

    return (
        <>
            <h1>Aula 3</h1>
            <hr />

            <h1>Exercício 1</h1>
            <EstouConseguindoAprenderReact estouConseguindo={true} />

            <br />
            <hr />
            <br />

            <h1>Exercício 2</h1>
            <EstaComSono comSono={false} />

            <br />
            <hr />
            <br />

            <h1>Exercício 3</h1>
            {alunos.map((aluno) => (
                <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso}/>
            ))}

            <br />
            <hr />
            <br />

            <h1>Exercício 4</h1>
            {novoAlunos.map((novoAlunos) => (
                <NovoAluno  nome={novoAlunos.nome} email={novoAlunos.email} curso={novoAlunos.curso} media={novoAlunos.media} />
            ))}

        </>
    );
};

export default App;
