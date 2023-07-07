import Navbar from "./components/Navbar";
import Fondo from "./components/fondo";
import Footer from "./components/footer";
import Card4 from "./components/card4";

export default function Promociones() {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <Fondo/>
            </div>
            <div className="text-black fixed top-40 px-[36rem] text-xs">
                <h1>Promociones</h1>
            </div>
            
            <div className="fixed top-52 grid grid-cols-2 gap-96 bg-center px-36">
                <Card4 imagen={"https://media.istockphoto.com/id/1135955050/es/foto/foto-recortada-de-mujer-con-l%C3%A1piz-labial-brillante-aislado-sobre-fondo-rojo.webp?b=1&s=170667a&w=0&k=20&c=RkhqI9FpsY2t7StzDZ1ut9LppkFOgeE54spWE_AoITU="} nombre={"En todos los labiales"} descripcion={"Envíos gratis"} />
                <Card4 imagen={"https://media.istockphoto.com/id/1408439145/es/foto/concepto-de-cuidado-de-la-piel-y-maquillaje-oto%C3%B1al-con-productos-de-belleza-en-la-mesa.jpg?s=612x612&w=0&k=20&c=ngsLuKpc8yAVMKuTGfDidZcDNWHPr_1YnljcE3q97So="} nombre={"Paquete 1"} descripcion={"Ahorra hasta un 20%"}/>
            </div>
            <div className="fixed top-80 grid grid-cols-1 gap-60 bg-center px-[34rem]">
            <Card4 imagen={"https://media.istockphoto.com/id/1390665987/es/foto/maquillaje-rosa-pastel.jpg?s=612x612&w=0&k=20&c=5Y9_CiP_gecl_tiSshk7HWnzS8xABofAzlicUys05ck="} nombre={"Productos en descuento"} descripcion={"15% de Descuento"} />

            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}