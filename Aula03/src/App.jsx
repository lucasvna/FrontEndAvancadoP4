import React from "react";
import RenderizandoComFuncoes from "./components/RenderizandoComFuncoes";
import RenderizaBackOuFront from "./components/RenderizaBackOuFront";
import TrabalhandoComImagens from "./components/TrabalhandoComImagens";
import HookContador from "./components/HookContador";
import HookMegaSena from "./components/HookMegaSena";
import HookQuina from "./components/HookQuina";

function App() {

    return (

        <div>

            <h1>Exercício 1</h1>
            <RenderizandoComFuncoes />

            <br />
            <hr />
            <br />

            <h1>Exercício 2</h1>
            <RenderizaBackOuFront />

            <br />
            <hr />
            <br />

            <h1>Exercício 3</h1>
            <TrabalhandoComImagens />

            <br />
            <hr />
            <br />

            <h2>Exercício 4</h2>
            <HookContador />

            <br />
            <hr />
            <br />

            <h2>Exercício 5</h2>
            <HookMegaSena />

            <br />
            <hr />
            <br />

            <h2>Exercício 6</h2>
            <HookQuina />

        </div>

    );

};

export default App;
