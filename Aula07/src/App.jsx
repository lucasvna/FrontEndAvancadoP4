import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicial from './pages/Inicial';
import Lgpd from './pages/Lgpd';
import Noticias from './pages/Noticias';
import DetalhesNoticias from './components/DetalhesNoticias';

const App = () => {

    return (

        <> <BrowserRouter>

            <h1>Aula 6</h1>
            <hr />

            <h3>Exercício 1, 2 e 3</h3>
            <Navbar />
            <Routes>

                <Route path='/' element={<Inicial />} />
                <Route path='/lgpd' element={<Lgpd />} />
                <Route path='/noticias' element={<Noticias />} />
                <Route path='/detalhes-da-noticias/:id' element={<DetalhesNoticias />} />

            </Routes>
            </BrowserRouter> </>

    );

};

export default App;