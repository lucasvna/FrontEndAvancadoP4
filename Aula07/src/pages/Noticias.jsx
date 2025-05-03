import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Noticias = () => {

    const [noticias, setNoticias] = useState([]);

    const url = "http://localhost:3000/noticias";

    useEffect(() => {

        async function fetchData() {

            const res = await fetch(url);
            const data = await res.json();

            setNoticias(data);

        }

        fetchData();

    }, [])

    return (
        <div>
            <h1>Lista de Noticias</h1>
            <hr />
            <ul>
                {noticias.map((noticia) => (
                    <li key={noticia.id}>
                        {noticia.titulo} <br /> <br />
                        {noticia.subtitulo} <br /> <br />
                        <Link to={`/detalhes-da-noticias/${noticia.id}`}>
                            Detalhes
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Noticias;
