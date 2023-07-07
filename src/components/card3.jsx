import { Link } from "react-router-dom";

export default function Card3({imagen, nombre, num, direccion}){
    return(
        <div className="flex flex-row gap-4">
            <img src={imagen} className="w-31 h-28"/>
            <div className="flex flex-col text-center gap-4">
            <h1 className="text-center text-xl">{nombre}</h1>
            <h1 className="text-xl">#{num}</h1>
            <Link ><h3 className="text-center text-white hover:text-black bg-amber-800">{direccion}</h3></Link>
            </div>
        </div>
    )
}