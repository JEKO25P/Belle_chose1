import { Link } from "react-router-dom";

import 'boxicons'

export default function Login() {
  return (
    <div className=" bg-fondo bg-pink-500 p-18 flex flex-col items-center justify-center gap-16 rounded-1xl h-[40rem]">
      <img src="src\images\belle chose.png" className=" fixed top-10 h-[18rem] w-[28rem] opacity-70"></img>
      <div className="fixed top-96 flex flex-col  items-center justify-center gap-6">
        <h1 className="text-2xl text-white hover:text-yellow-600">Crear una cuenta</h1>
        <div className="bg-yellow-600 p-3 w-32 rounded-lg text-center">
          <Link to={"/createuser"} className=" text-black hover:text-black">Registrarme</Link>
        </div>
        <h1 className="text-2xl text-white hover:text-yellow-600">¿Ya tienes una cuenta?</h1>
        <div className="bg-yellow-600 p-3 w-32 rounded-lg text-center">
          <Link to={"/login"} className=" text-black hover:text-black">Iniciar</Link>
        </div>
      </div>
    </div>
  );
}





//export default function App (){
  //return (<div className="bg-black">
    //<h1>app</h1>
  //</div>);
//}

//hover:text-red-500