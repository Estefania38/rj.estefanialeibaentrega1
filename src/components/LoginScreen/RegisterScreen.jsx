import { useState } from "react"
import './RegisterScreen.scss'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"


const RegisterScreen = () => {
    const { register } = useContext(AuthContext)

    const [values, setValues] = useState({
        email: '',
        nombre: '',
        password: ''
    })

    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        register(values)
       
    }

    return (
        <div className="registro">
            <div className="login-container">
                <h2  className="titulo-login">Ingresa tus datos</h2>
                <hr/>

                <form onSubmit={handleSubmit}>
                    <input 
                        value={values.email}
                        type="email" 
                        className="form-control my-2" 
                        placeholder="Email"
                        name="email"
                        onChange={handleInput}
                    />
                    <input 
                        type="nombre" 
                        value={values.nombre}
                        className="form-control my-2" 
                        placeholder="Nombre"
                        name="nombre"
                        onChange={handleInput}
                    />
                      <input 
                        type="password" 
                        value={values.password}
                        className="form-control my-2" 
                        placeholder="Contraseña"
                        name="password"
                        onChange={handleInput}
                    />
                    <button className="btn btn btn-login" type="submit">Registrarme</button>
                    <button className="btn btn  btn-login">
                    <Link to="/login">Iniciar sesión</Link>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default RegisterScreen