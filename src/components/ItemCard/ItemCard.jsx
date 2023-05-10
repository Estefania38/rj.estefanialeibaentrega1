import { Link } from "react-router-dom"
import "./ItemCard.scss"

const ItemCard = ({item}) => {
    return (
        <div className='card-products col-3 m-4'>
            <h3 className="nombre">{item.name}</h3>
            <img className="img-card" src={item.img} alt={item.name}/>
            <p>{item.description}</p>
            <p>Categoria: {item.category}</p>
            <p><strong>Precio: ${item.price}</strong></p>
            <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
        </div>
    )
}

export default ItemCard