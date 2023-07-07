import { Link } from "react-router-dom";

export default function Card6({imagen, direccion}){
    return(
        <div>
            <img src={imagen} className=" w-72 h-72 rounded-full "/>
            
        </div>
    )
}