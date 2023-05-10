import "./ItemCount.scss";

const ItemCount = ({cantidad, setCantidad, stock, agregar}) => {

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }    

    return (
        <div>
            <button onClick={handleRestar} className="button-detail">-</button>
            <span className="mx-2">{cantidad}</span>
            <button onClick={handleSumar} className="button-detail">+</button>
            <br/>
            <button onClick={agregar} className="button-detail-agregar my-3">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount