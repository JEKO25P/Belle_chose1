import Card2 from "./components/card2";
import Card3 from "./components/card3";
import Card5 from "./components/card5";
import Fondo from "./components/fondo";
import Footer from "./components/footer";
import Navbar3 from "./components/navbar3";


export default function Carrito() {
    return (
        <div>
            <div>
                <Navbar3/>
            </div>
            <div>
                <Fondo/>
            </div>
            <div className="flex flex-row gap-20">
            <div className="fixed top-48 grid grid-cols-1 gap-20 px-52 justify-between">
                <Card5 imagen={"https://cdn-icons-png.flaticon.com/512/2121/2121815.png"} direccion={"Pagar todo"}/>
            </div>
            <div className="flex flex-col fixed top-48 right-96 gap-16">
                <Card2 imagen={"https://media.istockphoto.com/id/1369926052/es/foto/conjunto-p%C3%BArpura-de-productos-de-maquillaje-dispersos-derramados.jpg?s=612x612&w=0&k=20&c=fX8ovqrMC_R5IKs_jFB-HKNLsvWDpBC2G6eFijMXTDY="} nombre={"Producto 1"} precio={2376}/>
                <Card2 imagen={"https://media.istockphoto.com/id/1414801672/es/foto/caja-de-cart%C3%B3n-con-producto-cosm%C3%A9tico-en-frente-od-puerta-abierta-compra-online-y-concepto-de.jpg?s=612x612&w=0&k=20&c=h09o9zOOzXCE4RP71GHP8qsrE21oUQyxQvJf2vMhkmE="} nombre={"Producto 2"} precio={2376}/>
            </div>
            </div>
            <div>
                <Footer/>
            </div>

        </div>
    )
}