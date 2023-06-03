import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { Navbar } from "../components/Navbar/Navbar";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../components/Cart/Cart";
import LoginScreen from "../components/LoginScreen/LoginScreen";
import RegisterScreen from "../components/LoginScreen/RegisterScreen";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "../context/AuthContext";
import Error404 from "../components/Error404/Error404";
import Footer from "../components/Footer/Footer";
import CartWidget from "../components/CartWidget/CartWidget";
import Checkout from "../components/Checkout/Checkout";
import Nosotros from "../components/Nosotros/Nosotros";

const AppRouter = () => {
  const  user  = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Navbar authenticated={user?.auth}/>

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/productos/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="*" element={<Navigate to={"/"} />} /> */}
        <Route path="*" element={<Error404 />} />

        {/* <Route path='*' element={ <Navigate to="/login"/>}/> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
