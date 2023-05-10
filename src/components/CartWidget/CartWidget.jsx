import logo from "../../assets/carrito.png";
import "./CartWidget.scss";

const CartWidget = () => {
  return (
    <div>
      <spam className="indicador">0</spam>
      <img className="img-carrito" src={logo} />
    </div>
  );
};

export default CartWidget;
