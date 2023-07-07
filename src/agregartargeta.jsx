import Fondo from "./components/fondo";
import Footer from "./components/footer";
import Navbar3 from "./components/navbar3";
import Card5 from "./components/card5";
import { Link } from "react-router-dom";

export default function AgregarTargeta() {
    return (
        <div>
            <div>
                <Navbar3 />
            </div>
            <div>
                <Fondo />
            </div>
            <div className="fixed top-48 grid grid-cols-1 gap-20 px-52 justify-between">
                <Card5 imagen={"https://cdn-icons-png.flaticon.com/512/423/423519.png"} direccion={"Pagar todo"} />
            </div>
            <div className="fixed top-48 flex flex-col  items-center justify-center gap-6 px-[50rem]">
                <div className="bg-white p-3 w-52 rounded-lg text-center">
                    <input className="bg-white text-black" type="search" placeholder="Numero de targeta"></input>
                </div>
                <div className="bg-white p-3 w-52 rounded-lg text-center">
                <input className="bg-white text-black" type="search" placeholder="Nombre del titular"></input> 
                </div>
                <div className="bg-white p-3 w-52 rounded-lg text-center">
                <input className="bg-white text-black" type="search" placeholder="MM/AA...."></input>   
                </div>
                <div className="bg-white p-3 w-52 rounded-lg text-center">
                <input className="bg-white text-black" type="search" placeholder="CVV..."></input>                
                </div>
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}