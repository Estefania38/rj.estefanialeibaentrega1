import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import AppRouter from "./router/AppRouter";
//import {Cover, Themes, Switch} from "./components/Index";
//import {ThemeProvider} from "styled-components";
//import { useState } from "react";

function App() {

  
  return (   
    <AuthProvider>      
      <CartProvider>
        <AppRouter />
      </CartProvider>       
    </AuthProvider>
  );
}

export default App;


