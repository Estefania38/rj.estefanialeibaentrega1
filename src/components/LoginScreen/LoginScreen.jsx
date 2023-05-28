import { useContext, useState } from "react"
import './LoginScreen.scss'
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"


const LoginScreen = () => {
    const { login, loginWithGoogle } = useContext(AuthContext)

    const [values, setValues] = useState({
        email: '',
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
        login(values)
    }

    return (
        <div className="login">
            <div className="login-container">
                <h2 className="titulo-login">Bienvenido</h2>
                <hr/>

                <form onSubmit={handleSubmit}>
                    <input 
                        value={values.email}
                        type="email" 
                        className="form-control my-2" 
                        placeholder="Mail o usuario"
                        name="email"
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
                    <br />
                    <button className="btn btn btn-login" type="submit">INGRESAR</button>
                    <button className="btn btn  btn-login">
                    <Link  to="/register">REGISTRARME</Link>
                    </button>
                </form>
                <br/>
                <button className="btn btn  btn-login" onClick={loginWithGoogle}>Ingresar con Google</button>
            </div>
        </div>
    )
}

export default LoginScreen