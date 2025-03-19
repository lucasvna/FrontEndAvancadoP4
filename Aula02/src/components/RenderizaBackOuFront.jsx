import React from "react";

function RenderizaBackOuFront() {
    function oQueRenderiza(qualLinguagem) {
        if (qualLinguagem === "Java") {
            return <h1>Backend</h1>;
        } else if (qualLinguagem === "React") {
            return <b>Frontend</b>;
        } else if (qualLinguagem === "AWS") {
            return <em>Cloud</em>;
        }
    };

    return (

        <div>

        {oQueRenderiza("Java")}
        {oQueRenderiza("React")}
        <br />
        {oQueRenderiza("AWS")}

        </div>

    );

}

export default RenderizaBackOuFront;
