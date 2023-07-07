import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import AcercaDe from "../acercade";
import Login from "../login";
import CreateUser from "../createuser";
import HomePage from "../homepage";
import Navbar2 from "../components/Navbar2";
import CuadroInicio from "../components/card2";
import Navbar3 from "../components/navbar3";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Terminos from "../terminos";
import Fondo from "../components/fondo"
import Ayuda from "../ayuda"
import Detalles from "../detalles"
import Contrasena from "../contrasena";
import Fondo from "../components/fondo";
import RoundCards from "../components/roundcards";
import Busqueda from "../busqueda";
import Catalogo from "../catalogo";
import Card2 from "../components/card2";
import LoMasTop from "../lomastop";
import Envio from "../envio";
import Promociones from "../promociones";
import Carrito from "../carrito";
import Perfil from "../perfil";
import AgregarTargeta from "../agregartargeta";
import MetodoPagp from "../metotopago";



export const routes = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
    },
    {
        path: "/acercade",
        element: <AcercaDe/>
    },
    {
        path: "/terminos",
        element: <Terminos/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/createuser",
        element: <CreateUser/>
    },
    {
        path: "/homepage",
        element: <HomePage/>
    },
    {
        path: "/cuadroinicio",
        element: <CuadroInicio/>
    },
    {
        path: "/navbar",
        element: <Navbar/>
    },
    {
        path: "/navbar2",
        element: <Navbar2/>
    },
    {
        path: "/navbar3",
        element: <Navbar3/>
    },
    {
        path: "/footer",
        element: <Footer/>
    },
    {
        path: "/fondo",
        element: <Fondo/>
    },
    {
<<<<<<< HEAD
        path: "/ayuda",
        element: <Ayuda/>
    },
    {
        path: "/detalles",
        element: <Detalles/>
    },
    {
        path: "/contrasena",
        element: <Contrasena/>
=======
        path: "/roundcards",
        element: <RoundCards/>
    },
    {
        path: "/busqueda",
        element: <Busqueda/>
    },
    {
        path: "/catalogo",
        element: <Catalogo/>
    },
    {
        path: "/card2",
        element: <Card2/>
    },
    {
        path: "/lomastop",
        element: <LoMasTop/>
    },
    {
        path: "/envio",
        element: <Envio/>
    },
    {
        path: "/promociones",
        element: <Promociones/>
    },
    {
        path: "/carrito",
        element: <Carrito/>
    },
    
    {
        path: "/perfil",
        element: <Perfil/>
    },
    
    {
        path: "/agregartargeta",
        element: <AgregarTargeta/>
    },
    
    {
        path: "/metodopago",
        element: <MetodoPagp/>
>>>>>>> 4e1dc20b49476afbc35745a08d4d2bf26e855b98
    },

    {
        path: "*",
        element : <h1> ERROR CHAVO LA PAGINA NO EXISTE</h1>
    }
])