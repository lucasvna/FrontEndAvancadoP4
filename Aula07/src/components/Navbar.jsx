import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (

        <nav>
            <Link to={"/"}>Inicial</Link>
            <Link to={"/lgpd"}>LGPD</Link>
            <Link to={"/noticias"}>Noticias</Link>
        </nav>

    );

};

export default Navbar;
