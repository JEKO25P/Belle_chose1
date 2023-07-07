import { Link } from "react-router-dom";

export default function Card5({imagen, direccion}){
    return(
        <div>
            <img src={imagen} className=" w-60 h-60 "/>
            <Link to={"/homepage"}><h3 className="text-center text-black bg-white">{direccion}</h3></Link>
        </div>
    )
}