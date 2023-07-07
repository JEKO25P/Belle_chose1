import { Link } from "react-router-dom";

export default function Card({imagen, nombre}){
    return(
        <div>
            <img src={imagen} className="w-32 h-31"/>
            <Link to={"/catalogo"} className=" text-black text-2xl<text-center te xt-xl">{nombre}</Link>
        </div>
    )
}