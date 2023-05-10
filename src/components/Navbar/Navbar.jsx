import "./Navbar.scss";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

export const Navbar = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img className="navbar-logo" src={"../public/img/logo.png"} alt="logo" />
        <nav className="navbar">
          <Link to="/" className="navbar-link">Inicio</Link>
          <Link to="/productos/calzado-sale" className="navbar-link">Puma Sale</Link>
          <Link to="/productos/calzado-dama" className="navbar-link">Mujer</Link>
          <Link to="/productos/calzado-hombre" className="navbar-link">Hombre</Link>
          <Link to="/productos/calzado-niño" className="navbar-link">Niños</Link>
          <Link to="/productos/indumentaria" className="navbar-link">Indumentaria</Link>
        </nav>
        <CartWidget />
      </div>
    </header>
  );
};
