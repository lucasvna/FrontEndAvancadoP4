import RenderizandoComFuncoes from "./components/RenderizandoComFuncoes";
import RenderizaBackOuFront from "./components/RenderizaBackOuFront";
import TrabalhandoComImagens from "./components/TrabalhandoComImagens";
import HookContador from "./components/HookContador";
import HookMegaSena from "./components/HookMegaSena";
import HookQuina from "./components/HookQuina";

function App() {

    return (

        <div>

            <h1>Exercicio 1</h1>
            <hr />
            <RenderizandoComFuncoes />
            <br />
            <hr />
            <br />
            <h1>Exercicio 2</h1>
            <hr />
            <RenderizaBackOuFront />
            <br />
            <hr />
            <br />
            <h1>Exercicio 3</h1>
            {/* <hr /> */}
            {/* <TrabalhandoComImagens /> */}
             <hr/>
            <HookContador></HookContador>
            <hr/>   
            <HookMegaSena></HookMegaSena>
            <hr></hr>
            <HookQuina></HookQuina>
        </div>

    );

};

export default App;
