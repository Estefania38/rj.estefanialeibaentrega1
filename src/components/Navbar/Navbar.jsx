import "./Navbar.scss";
import CartWidget from "../CartWidget/CartWidget";

export const Navbar = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img className="navbar-logo" src={"./public/img/logo.png"} alt="logo" />
        <nav className="navbar">
          <p className="navbar-link">Calzado</p>
          <p className="navbar-link">Indumentaria</p>
        </nav>
        <CartWidget/>
      </div>
    </header>
  );
};
