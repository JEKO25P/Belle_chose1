import { Link } from "react-router-dom";

export default function Card2({imagen, nombre, direccion, comp, precio}){
    return(
        <div className="flex flex-row gap-4">
            <img src={imagen} className="w-31 h-28"/>
            <div className="flex flex-col text-center">
            <h1 className="text-center text-xl">{nombre}</h1>
            <Link ><h3 className="text-center text-white hover:text-black">{direccion}</h3></Link>
            <Link ><h3 className="text-center text-white hover:text-black bg-blue-400" >{comp}</h3></Link>
            <h3 >${precio}</h3>
            </div>
        </div>
    )
}