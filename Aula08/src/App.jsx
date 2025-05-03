import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicial from './pages/Inicial';
import Lgpd from './pages/Lgpd';
import Noticias from './pages/Noticias';
import DetalhesNoticias from './components/DetalhesNoticias';
import NoticiasAxios from './pages/NoticiasAxios';
import Dpol from './pages/Dpol';
import Faculdade from './pages/Faculdade';

const App = () => {

    return (

        <> <BrowserRouter>

            <h1>Continuação da Aula 6</h1>
            <hr />

            <h3>Exercícios 1, 2, 3 e 4</h3>
            <Navbar />
            <Routes>

                <Route path='/' element={<Inicial />} />
                <Route path='/lgpd' element={<Lgpd />} />
                <Route path='/noticias' element={<Noticias />} />
                <Route path='/detalhes-da-noticias/:id' element={<DetalhesNoticias />} />
                <Route path='/noticias-axios' element={<NoticiasAxios />} />
                <Route path="/dpo-lgpd" element={<Dpol />}></Route>
                <Route path="/faculdade" element={<Faculdade />}></Route>

            </Routes>
            </BrowserRouter> </>

    );

};

export default App;