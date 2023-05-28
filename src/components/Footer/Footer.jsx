import "./Footer.scss";


const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section_padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>Ayuda</h4>
            <a href="/employer">
              <p>Contactanos</p>
            </a>
            <a href="/employer">
              <p>Segui tu pedido</p>
            </a>
            <a href="/employer">
              <p>Preguntas frecuentes</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Post venta</h4>
            <a href="/employer">
              <p>Cuidado de los productos</p>
            </a>
            <a href="/employer">
              <p>Cambios y devoluciones</p>
            </a>
            <a href="/employer">
              <p>Tiendas</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Acerca de PUMA</h4>
            <a href="./Nosotros/Nosotros">                                               
              <p>Compañia</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Info de tu interes</h4>
            <a href="/employer">
              <p>Sustentabilidad</p>
            </a>
            <a href="/employer">
              <p>Noticias Corporativas</p>
            </a>
            <a href="/employer">
              <p>Trabaja con nosotros</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Siguenos en redes sociales</h4>
           
          </div>
        </div>
        <hr></hr>
        <div className="sb__footer-below">
            <div className="sb__footer-copyright">
                <p>
                    @{new Date().getFullYear()} CodeInn. All right reserved.
                </p>
      </div>
      <div className="sb__footer-below-links">
        <a href="/terms"><div><p>Terminos y condiciones</p></div></a>
        <a href="/privacy"><div><p>Politica de privacidad</p></div></a>
        <a href="/security"><div><p>Seguridad</p></div></a>
        <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Footer;
