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
        path: "*",
        element : <h1> ERRO CHAVO LA PAGINA NOE XISTE</h1>
    }
])