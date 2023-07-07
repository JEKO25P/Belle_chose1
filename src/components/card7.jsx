import { Link } from "react-router-dom";

export default function Card7({nombre, imagen }){
    return(
        <div>
            <Link to={"/homepage"}><h3 className="text-center text-black bg-white">{nombre}</h3></Link>
            <img src={imagen} className=" w-48 h-36 "/>
            
        </div>
    )
}