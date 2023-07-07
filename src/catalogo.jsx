import Navbar from "./components/Navbar";
import Fondo from "./components/fondo";
import Footer from "./components/footer";
import Card from "./components/card";
import Card2 from "./components/card2";

export default function Catalogo() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Fondo />
            </div>
            <div className="px-20">
                <div className="fixed top-40 grid grid-cols-5 gap-32 justify-center px-10">
                    <Card imagen={"https://media.istockphoto.com/id/1458639364/es/foto/maqueta-de-l%C3%A1piz-labial-en-pedestal-rosa-y-fondo-de-formas-geom%C3%A9tricas-abstractas.jpg?s=612x612&w=0&k=20&c=cmZGZ7KKdBfubEBNzKp3wH834q4cbN6m8f6kZZdkifg="} nombre="Productos" />
                    <Card imagen={"https://media.istockphoto.com/id/1505641674/es/foto/enjuague-bucal-y-otros-productos-de-higiene-bucal-en-vista-de-mesa-de-color-con-espacio-de.jpg?s=612x612&w=0&k=20&c=o2CRlmQ1vPAhxgSdIaN5uKyN9dsPams11OZa_FJxfiY="} nombre="Productos" />
                    <Card imagen={"https://media.istockphoto.com/id/1418265792/es/foto/muestras-cosm%C3%A9ticas-cosm%C3%A9ticos-de-estilo-melocot%C3%B3n-beige-rojo-y-estilo-coral-flaty-paleta-de.webp?b=1&s=170667a&w=0&k=20&c=PzDWQD-jq_aius8jaDs1pMxaKdEL0r_BepldngAPqgU="} nombre="Productos" />
                    <Card imagen={"https://media.istockphoto.com/id/1370468785/es/foto/una-paleta-de-sombras-de-ojos-nude-y-herramientas-de-maquillador-sobre-un-tocador-de-m%C3%A1rmol.webp?b=1&s=170667a&w=0&k=20&c=BqbpfL5nioeGzj_A3eGrnGYC3WGfPlqlOknfWsRLBvU="} nombre="Productos" />
                    <Card imagen={"https://media.istockphoto.com/id/1370468785/es/foto/una-paleta-de-sombras-de-ojos-nude-y-herramientas-de-maquillador-sobre-un-tocador-de-m%C3%A1rmol.webp?b=1&s=170667a&w=0&k=20&c=BqbpfL5nioeGzj_A3eGrnGYC3WGfPlqlOknfWsRLBvU="} nombre="Productos" />
                </div>
                
            </div>
            <div className="fixed top-96 grid grid-cols-3 gap-60 bg-center px-10">
                <Card2 imagen={"https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29zbWV0aWNvcyUyMGRlJTIwYmVsbGV6YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"} nombre={"Producto 1"} direccion={"ver mas.."} comp={"agregar a carrito"} precio={1500}/>
                <Card2 imagen={"https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29zbWV0aWNvcyUyMGRlJTIwYmVsbGV6YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"} nombre={"Producto 2"} direccion={"ver mas.."} comp={"agregar a carrito"} precio={1500}/>
                <Card2 imagen={"https://images.unsplash.com/photo-1512206879471-b4d119aef899?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29zbWV0aWNvcyUyMGRlJTIwYmVsbGV6YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"} nombre={"Producto 3"} direccion={"ver mas.."} comp={"agregar a carrito"} precio={1500}/>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}


