import Navbar from "./components/Navbar";
import Fondo from "./components/fondo";
import Footer from "./components/footer";
import Card3 from "./components/card3";

export default function Envio() {
    return (
        <div>

            <div>
                <Navbar />
            </div>
            <div>
                <Fondo />
            </div>
            <div className="text-black fixed top-40 px-[32rem] text-xs">
                <h1>Rastrea tu envío</h1>
            </div>
            <div className="px-52">
                <div className="fixed top-48 flex flex-row border-2 p-2 rounded-xl gap-2">
                    <box-icon name='search-alt' color='rgba(239,230,230,0.98)' ></box-icon>
                    <input className="bg-white text-black p-1" type="search" placeholder="Codigo"></input>
                </div>
            </div>
            <div className="fixed top-80 grid grid-cols-2 gap-96 bg-center px-36">
                <Card3 imagen={"https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29zbWV0aWNvcyUyMGRlJTIwYmVsbGV6YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"} nombre={"Producto 1"} num={"Estado de envio"} direccion={"En camino.."} />
                <Card3 imagen={"https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29zbWV0aWNvcyUyMGRlJTIwYmVsbGV6YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"} nombre={"Producto 2"} num={"Estado de envio"} direccion={"Enviado.."} />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}