import { Link } from "react-router-dom";

export default function RoundCards({imagen, nombre, direccion}){
    return(
        <div>
            <img src={imagen} className=" w-32 h-44 rounded-full"/>
            <h1 className="text-center text-xl">{nombre}</h1>
            <Link ><h3 className="text-center text-white hover:text-black">{direccion}</h3></Link>
        </div>
    )
}