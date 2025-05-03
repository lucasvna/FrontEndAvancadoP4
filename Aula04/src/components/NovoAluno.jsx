import React from "react";

const NovoAluno = ({ nome, email, curso, media}) => {

    let status = media >= 7 ? "APROVADO" : "REPROVADO";

    return (
        <>
            <p>{nome} - {email} - {curso} - {media} - {status}</p>
            <br />
        </>
    );
};

export default NovoAluno;
