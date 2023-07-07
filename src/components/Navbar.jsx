import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <div>
                <div className="bg-black text-white fixed top-0 w-full flex flex-row justify-between px-12 py-11 items-center gap-16">
                    <div>
                        <div className="flex flex-row border-2 p-2 rounded-xl gap-2">
                            <box-icon name='search-alt' color='rgba(239,230,230,0.98)' ></box-icon>
                            <input className="bg-white text-black" type="search" placeholder="Buscar"></input>
                        </div>
                    </div>
                    <div className="items-center px-[35rem] fixed top-0">
                        <div>
                            <img src="src\images\belle chose.png" height={120} width={120} items-center></img>
                        </div>
                    </div>
                    <div className="fixed top-12 px-[54rem] text-4xl py-2 ">
                        <div className="flex flex-row gap-20">
                            <Link to={"/"} className="text-white hover:text-yellow-600">Inicio</Link>
                            <div className="flex flex-col">
                                <box-icon name='user-circle' type='solid' color='rgba(239,230,230,0.98)' size='lg' ></box-icon>
                            <Link to={"/perfil"} className="text-white text-xs px-3">Perfil</Link>
                            </div>
                            <div className="flex flex-col">
                                <box-icon name='cart-alt' color='rgba(239,230,230,0.98)' size='lg'></box-icon>
                                <Link to={"/perfil"} className="text-white text-xs px-3">Carrito</Link>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
//<input className="bg-white outline-none" type="search"></input>
//
//hover:text-red-500
//hola como estamos en este lado todo correcto parece que nos esta llendo full 