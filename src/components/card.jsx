export default function Card({imagen, nombre}){
    return(
        <div>
            <img src={imagen} className="w-32 h-31"/>
            <h1 className="text-center text-xl">{nombre}</h1>
        </div>
    )
}