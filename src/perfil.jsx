import Fondo from "./components/fondo";
import Footer from "./components/footer";
import Navbar3 from "./components/navbar3";
import { Link } from "react-router-dom";
import Card6 from "./components/card6";

export default function Perfil() {
    return (
        <div>
            <div>
                <Navbar3 />
            </div>
            <div>
                <Fondo />
            </div>
            <div className=" gap-16">
            <div className="fixed top-48 grid grid-cols-1 gap-20 px-52 justify-between ">
                <Card6 imagen={"src/images/WhatsApp Image 2023-07-05 at 14.27.28.jpeg"}/>
            </div>

            <div className="fixed top-48 flex flex-col  items-center justify-center gap-6 px-[50rem]">
                <h1 className="text-2xl text-black hover:text-white">Nombre de usuario: </h1>
                <div className="bg-white p-3 w-52 rounded-lg text-center">
                    <Link to={"/createuser"} className=" text-gray-400 hover:text-black">JUAN ROSS</Link>
                </div>
                <h1 className="text-2xl text-black hover:text-white">Gmail: </h1>
                <div className="bg-white p-3 w-52 rounded-lg text-center">
                    <Link to={"/login"} className=" text-gray-400 hover:text-black">rossJuan@gamilcom</Link>
                </div>
            </div>
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}