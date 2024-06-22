import React from "react";
import {Link} from "react-router-dom";
const Nav = (props) => {
    return (
       <nav>
          <nav class="menu">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </nav>
       </nav>
    );
}

export default Nav;