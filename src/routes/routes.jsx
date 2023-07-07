import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import AcercaDe from "../acercade";
import Login from "../login";
import CreateUser from "../createuser";
import HomePage from "../homepage";
import Navbar2 from "../components/Navbar2";
import CuadroInicio from "../components/cuadroInicio";
import Navbar3 from "../components/navbar3";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Terminos from "../terminos";
import Fondo from "../components/fondo"
import Ayuda from "../ayuda"
import Detalles from "../detalles"
import Contrasena from "../contrasena";

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
    },

    {
        path: "*",
        element : <h1> ERROR CHAVO LA PAGINA NO EXISTE</h1>
    }
])