import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isAuthenticatedMenu, setIsAuthenticatedMenu] = useState(false);
  const { pathname } = useLocation;

  useEffect(() => setIsAuthenticatedMenu(user.auth), [user]);

  const buttonsView = {
    "/": (
      <>
        <Link to="/register">
          <button>Registrarse</button>
        </Link>
        <Link to="/login">
          <button>Iniciar Sesión</button>
        </Link>
      </>
    ),
    "/register": (
      <>
        <Link to="/login">
          <button className="btn-login">Iniciar Sesión</button>
        </Link>
      </>
    ),
    "/login": (
      <>
        <Link to="/register">
          <button className="btn-login">Registrarse</button>
        </Link>
      </>
    ),
  };
  const handleIsAuthMenu = () => {
    if (isAuthenticatedMenu) {
      return (
        <div className="container">
          <p className="detalle-logout">Bienvenido {user.email}</p>
          <button className="btn btn btn-logout" onClick={logout}>
            Logout
          </button>
        </div>
      );
    } else {
      return buttonsView[pathname];
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <img
          className="navbar-logo"
          src={"../public/img/logo.png"}
          alt="logo"
        />
        <nav className="navbar">
          <Link to="/" className="navbar-link">
            Inicio
          </Link>
          <Link to="/productos/calzado-sale" className="navbar-link">
            Puma Sale
          </Link>
          <Link to="/productos/calzado-dama" className="navbar-link">
            Mujer
          </Link>
          <Link to="/productos/calzado-hombre" className="navbar-link">
            Hombre
          </Link>
          <Link to="/productos/calzado-niño" className="navbar-link">
            Niños
          </Link>
          <Link to="/productos/indumentaria" className="navbar-link">
            Indumentaria
          </Link>
          <div className="buttons">{handleIsAuthMenu()}</div>
        </nav>
        
        <CartWidget />
      </div>
      {/* <div className='container'>
                <p className="detalle-logout">Bienvenido {user.email}</p>
                <button className='btn btn btn-logout' onClick={logout}>Logout</button>
            </div> */}
    </header>
  );
};
