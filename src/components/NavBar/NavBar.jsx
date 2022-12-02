//COMPO NAVBAR 
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

import "./navbar.css";

function NavBar() {
  return (
    <nav className="nav-menu">
      <Link to="/">
        <h3>TAKONES SHOES</h3>
      </Link>

      <Link to="/category/hombre">HOMBRE</Link>
      <Link to="/category/mujer">MUJER</Link>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
