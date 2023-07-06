
import { Link } from "react-router-dom";
import Navbar3 from "./components/navbar3";


export default function Login() {
    return (
        <div>
            <div>
                <Navbar3 />
            </div>
            <div className="bg-yellow-600 p-[21rem]  ">
                <div className="text-black fixed top-48 text-center justify-between px-[13rem]" >
                    <h1 className="">Iniciar sesion</h1>
                </div>
                <div className=" flex flex-row">
                    <div className="fixed top-72 flex flex-col items-center justify-center gap-6 px-1">
                        <h1 className="text-2xl text-black hover:text-white">Correo Electronico</h1>
                        <div className="bg-white p-3 w-52 rounded-lg text-center">
                            <text to={"/createuser"} className=" text-gray-400 hover:text-black">Registrarme</text>
                        </div>
                        <h1 className="text-2xl text-black hover:text-white">Contraseña</h1>
                        <div className="bg-white p-3 w-52 rounded-lg text-center">
                            <Link to={"/login"} className=" text-gray-400 hover:text-black">Iniciar</Link>
                        </div>
                        <Link to={"/"} className="text-gray-400">¿Olvidaste tu contraseña?</Link>
                    </div >
                    <div className="flex flex-col text-center fixed top-80 px-[38rem] py-10 ">
                        <Link to={"/homepage"} className="bg-white text-2xl text-black hover:text-yellow-600 rounded-2xl p-3 w-32">Iniciar</Link>
                        <br>
                        </br>
                        <Link to={"/"} className="bg-white text-2xl text-black hover:text-yellow-600 rounded-2xl p-3 w-32">Cancelar</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}