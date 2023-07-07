import Navbar from "./components/Navbar";
import Fondo from "./components/fondo";
import Card3 from "./components/card3";
import Footer from "./components/footer";

export default function LoMasTop() {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <Fondo/>
            </div>
            <div className="text-black fixed top-40 px-[36rem] text-xs">
                <h1>Lo mas top</h1>
            </div>
            
            <div className="fixed top-60 grid grid-cols-2 gap-96 bg-center px-36">
                <Card3 imagen={"https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29zbWV0aWNvcyUyMGRlJTIwYmVsbGV6YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"} nombre={"Brochas para maquillar"} num={"1"} direccion={"ver mas.."} />
                <Card3 imagen={"https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29zbWV0aWNvcyUyMGRlJTIwYmVsbGV6YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"} nombre={"Labial x"} num={"2"} direccion={"ver mas.."} />
            </div>
            <div className="fixed top-96 grid grid-cols-1 gap-60 bg-center px-[34rem]">
            <Card3 imagen={"https://images.unsplash.com/photo-1512206879471-b4d119aef899?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29zbWV0aWNvcyUyMGRlJTIwYmVsbGV6YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"} nombre={"Cremas para la piel"} num={"3"} direccion={"ver mas.."} />

            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}