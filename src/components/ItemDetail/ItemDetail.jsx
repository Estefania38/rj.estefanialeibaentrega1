import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import SelectTalle from "../SelectTalle/SelectTalle";
import "./ItemDetail.scss"

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
    const [cantidad, setCantidad] = useState(1)
    const [talle, setTalle] = useState(null)

    const handleAgregar = () => {
        console.log({
            ...item,
            cantidad,
            talle
        })
    }    
    return (
        <div className="product-card-container">
            <h3>{item.name}</h3>
            <img className="img-card" src={item.img} alt={item.name}/>
            <p className="description"><strong>{item.description}</strong></p>
            <p>Categoria: {item.category}</p>
            <p><strong>Precio: ${item.price}</strong></p>
            <p>Subtotal: {item.price * cantidad}</p>

            <SelectTalle setTalle ={setTalle} options={talles}/>

            <ItemCount
                cantidad={cantidad}
                setCantidad={setCantidad}
                stock={item.stock}
                agregar={handleAgregar}
            />
        </div>
    )
}

export default ItemDetail