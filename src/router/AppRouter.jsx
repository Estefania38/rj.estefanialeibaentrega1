import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { Navbar } from "../components/Navbar/Navbar";
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart';
import LoginScreen from '../components/LoginScreen/LoginScreen';
import RegisterScreen from '../components/LoginScreen/RegisterScreen';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"
import Error404 from "../components/Error404/Error404";
import Footer from "../components/Footer/Footer";
import { Banner } from "../components/Banner/Banner";
import CartWidget from "../components/CartWidget/CartWidget";
import Checkout from "../components/Checkout/Checkout";
//import Nosotros from "../components/Nosotros/Nosotros";


const AppRouter = () => {
    const { user } = useContext(AuthContext) 

    return (
        <BrowserRouter>
            {
                user.logged
                ? <>
                    <Navbar />                   
                    {/* rutas privadas */}                    
                    <Routes>
                        <Route path="/Banner" element={<Banner />} />
                        <Route path="/cart" element={<CartWidget />} />
                        <Route path='/' element={ <ItemListContainer /> } />
                        <Route path='/productos/:categoryId' element={ <ItemListContainer />} />
                        <Route path='/detail/:itemId' element={ <ItemDetailContainer /> }/>
                        <Route path='/cart' element={ <Cart/> }/>                      
                        <Route path ='/checkout' element={ <Checkout/> }/>                                       
                        <Route path='*' element={ <Navigate to={"/"} /> }/>                                                
                        <Route path="*" element={<Error404 />} />                        
                    </Routes>                    
                <Footer />
                </>
                : <Routes>
                    {/* rutas públicas */}
                    <Route path='/login' element={<LoginScreen/>}/>
                    <Route path='/register' element={<RegisterScreen/>}/>
                    <Route path='*' element={ <Navigate to="/login"/>}/>
                    
                </Routes>
            }
        </BrowserRouter>   
    )
}

export default AppRouter