import React from "react";
import ImagemUrubu from "../assets/image.png";

function TrabalhandoComImagens() {
    return (
        <div>
            <img src="image.png" alt="VAI CORINTHIANS" />
            <img src={ImagemUrubu} alt="Urubu do Pix, Rápido e Seguro" />
        </div>
    );
}

export default TrabalhandoComImagens;
