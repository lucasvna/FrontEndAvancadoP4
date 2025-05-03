import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetalhesNoticias = () => {

    const { id } = useParams();
    const url = `http://localhost:3000/noticias/${id}`;
    const [detalhesNoticias, setDetalhesNoticias] = useState({});

    useEffect(() => {

        async function fetchData() {

            const res = await fetch(url);
            const data = await res.json();

            setDetalhesNoticias(data);

        }

        fetchData();

    }, [])

    return (

        <div>

            <h1>Detalhe das Noticias por ID</h1>
            <p>{detalhesNoticias.titulo}</p>
            <p>{detalhesNoticias.subtitulo}</p>
            <p>{detalhesNoticias.texto_da_noticia}</p>

        </div>
    );
};

export default DetalhesNoticias;