import { Link } from "react-router-dom";
import Navbar3 from "./components/navbar3";

export default function CreateUser() {
    return (
        <div>
            <div>
                <Navbar3 />
            </div>
            <div className="bg-yellow-600 p-[20rem]  ">
                <div className="text-black fixed top-48 text-center justify-between px-[13rem]" >
                    <h1 className="">Crear cuenta</h1>
                </div>
                <div className=" flex flex-row">
                    <div className="fixed top-72 flex flex-col  items-center justify-center gap-6 px-1">
                        <h1 className="text-2xl text-black hover:text-white">Correo Electronico</h1>
                        <div className="bg-white p-3 w-52 rounded-lg text-center">
                            <Link to={"/createuser"} className=" text-gray-400 hover:text-black">example@gmail.com</Link>
                        </div>
                        <h1 className="text-2xl text-black hover:text-white">Contraseña</h1>
                        <div className="bg-white p-3 w-52 rounded-lg text-center">
                            <Link to={"/login"} className=" text-gray-400 hover:text-black">*********</Link>
                        </div>
                        <div className="bg-white p-3 w-20 rounded-lg ">
                            <Link to={"/homepage"} className="text-black">INICIAR</Link>
                        </div>
                    </div >
                    <div className="flex flex-col text-center fixed top-80 px-[38rem] py-10 ">
                        <div className="fixed top-72 flex flex-col  items-center justify-center gap-6 px-1">
                            <h1 className="text-2xl text-black hover:text-white">Nombre de usuario</h1>
                            <div className="bg-white p-3 w-52 rounded-lg text-center">
                                <Link to={"/createuser"} className=" text-gray-400 hover:text-black">Usuario1234</Link>
                            </div>
                            <h1 className="text-2xl text-black hover:text-white">Direccion</h1>
                            <div className="bg-white p-3 w-52 rounded-lg text-center">
                                <Link to={"/login"} className=" text-gray-400 hover:text-black">Direccion</Link>
                            </div>
                            <div className="bg-white p-3 w-30 rounded-lg ">
                                <Link to={"/"} className="text-black">CANCELAR</Link>
                            </div>
                        </div >
                    </div>
                </div>
            </div>
        </div>
    );
}