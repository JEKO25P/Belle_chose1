import Navbar from "./components/Navbar";
import Fondo from "./components/fondo";
import Footer from "./components/footer";

export default function Detalles(){
    return (
        <div>
        <div>
            <Navbar/>
        </div>
        <div>
            <Fondo/>
        </div>
        <div className="fixed top-40 px-96 justify-center text-black text-type-bold" >
                <h1>Detalles de Pedido</h1>
            </div>
            <div>
                
            </div>
            <div><h2>"Producto 1"</h2></div>
            <div></div>
            <div></div>
            
        <div>
            <Footer/>
        </div>
    </div>
    )
   
}