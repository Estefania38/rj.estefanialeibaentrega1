import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Cart.scss";

const Cart = () => {
  const { cart, emptyCart, totalCompra, removeItem } = useContext(CartContext);


  if (cart.length === 0) {
    return (
      <div className="container my-5">
        <h2>No hay productos en el carrito</h2>
        <hr />
        <p>Seguir comprando</p>
        <Link to="/" className="btn btn-primary">
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div className="contenedor">
      <h2 className="tituloC">Tu compra</h2>
      <div className="product-card-container2">
        {cart.map((item) => (
          <div className="product1" key={item.id}>
            <h3>{item.name}</h3>
            <img className="img-card" src={item.img} />
            <p>Cantidad: {item.cantidad}</p>
            <p>Subotal: {item.cantidad * item.price}</p>
            <button
              onClick={() => removeItem(item.id)}
              className="btn btn-danger"
            >
              <FaTrashAlt />
            </button>
            <hr />
          </div>
        ))}
      </div>
      <div className="total">
        <h3>TOTAL: ${totalCompra()}</h3>
        <hr />
        <button onClick={emptyCart} className="btn btn-danger">
          Vaciar carrito
        </button>
        <Link to="/checkout" className="btn btn-success">
          Terminar mi compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
