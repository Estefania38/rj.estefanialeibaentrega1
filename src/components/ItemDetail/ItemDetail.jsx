import { useState, useContext,useMemo } from "react"
import ItemCount from "../ItemCount/ItemCount"
import SelectTalle from "../SelectTalle/SelectTalle";
import "./ItemDetail.scss"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'


const talles = [
    {
        value: "37",
        label: "UE 37.5"
    },
    {
        value: "38",
        label: "UE 38.5"
    },
    {
        value: "39",
        label: "UE 39.5"
    },
    {
        value: "40",
        label: "UE 40.5"
    },
    {
        value: "41",
        label: "UE 41.5"
    },
]

const ItemDetail = ({item}) => {
    const { cart, agregarAlCarrito, isInCart } = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1)
    const [talle, setTalle] = useState(null)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad,
           
        }
        agregarAlCarrito(newItem)
        
        Swal.fire('Producto agregado con exito!','', 'success')
    }    
    return (
        <div className="product-card-container">
            <h3>{item.name}</h3>
            <img className="img-card" src={item.img} alt={item.name}/>
            <p className="description"><strong>{item.description}</strong></p>
            <p>Categoria: {item.category}</p>
            <p><strong>Precio: ${item.price}</strong></p>
            <p><strong>Subtotal: ${item.price * cantidad}</strong></p>

            <SelectTalle setTalle ={setTalle} options={talles}/>
             
            <br/> 
         
            
            {
                isInCart(item.id)
                    ? <Link className="btn btn-success" to="/cart">Terminar mi compra</Link>
                    :
            <ItemCount
                cantidad={cantidad}
                setCantidad={setCantidad}
                stock={item.stock}
                agregar={handleAgregar}
            />
}
        </div>
    )
}

export default ItemDetail