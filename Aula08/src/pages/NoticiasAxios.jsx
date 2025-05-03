import React, { useState, useEffect } from "react";
import axios from "axios";

const NoticiasAxios = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:3000/noticias")
            .then((response) => {

                setData(response.data);

            }).catch((error) => console.error("Aconteceu um problema", error));

        const postNoticia = async () => {

            try {

                await axios.post("http://localhost:3000/noticias", {

                    "titulo": "Nova notícia de exemplo",
                    "subtitulo": "Novo subtitulo",
                    "texto-da-noticia": "Novo texto"

                });
                alert("Noticia postada com sucesso");

            } catch (error) {
                console.error("Erro ao enviar notícia:", error);
            }

        };

            //postNoticia();

    }, []);

    return (

        <div>

            {data.map((item) => (
                <div key={item.id}>{item.titulo}</div>
            ))}

        </div>

    );

};

export default NoticiasAxios;
