export default function Card4({imagen, nombre, descripcion}){
    return(
        <div className="flex flex-row gap-4">
            <img src={imagen} className="w-40 h-40"/>
            <div className="flex flex-col text-center gap-4">
            <h1 className="text-center text-xl">{nombre}</h1>
            <h2 className="text-center text-xl bg-red-700">{descripcion}</h2>
            </div>
        </div>
    )
}