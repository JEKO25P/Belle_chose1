import Navbar2 from "./components/Navbar2"
import Card from "./components/card"
import CuadroInicio from "./components/cuadroInicio"
import Navbar from "./components/Navbar"
import Footer from "./components/footer"




export default function HomePage() {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <div className=" bg-yellow-600 h-[34rem] fixed top-32 w-[90rem]"></div>
            </div>
            <div className="px-20">
                <div className="fixed top-40 grid grid-cols-4 gap-16 justify-center px-60">
                    <Card imagen={"https://media.istockphoto.com/id/1458639364/es/foto/maqueta-de-l%C3%A1piz-labial-en-pedestal-rosa-y-fondo-de-formas-geom%C3%A9tricas-abstractas.jpg?s=612x612&w=0&k=20&c=cmZGZ7KKdBfubEBNzKp3wH834q4cbN6m8f6kZZdkifg="} nombre="Productos" />
                    <Card imagen={"https://media.istockphoto.com/id/1505641674/es/foto/enjuague-bucal-y-otros-productos-de-higiene-bucal-en-vista-de-mesa-de-color-con-espacio-de.jpg?s=612x612&w=0&k=20&c=o2CRlmQ1vPAhxgSdIaN5uKyN9dsPams11OZa_FJxfiY="} nombre="Productos" />
                    <Card imagen={"https://media.istockphoto.com/id/1418265792/es/foto/muestras-cosm%C3%A9ticas-cosm%C3%A9ticos-de-estilo-melocot%C3%B3n-beige-rojo-y-estilo-coral-flaty-paleta-de.webp?b=1&s=170667a&w=0&k=20&c=PzDWQD-jq_aius8jaDs1pMxaKdEL0r_BepldngAPqgU="} nombre="Productos" />
                    <Card imagen={"https://media.istockphoto.com/id/1370468785/es/foto/una-paleta-de-sombras-de-ojos-nude-y-herramientas-de-maquillador-sobre-un-tocador-de-m%C3%A1rmol.webp?b=1&s=170667a&w=0&k=20&c=BqbpfL5nioeGzj_A3eGrnGYC3WGfPlqlOknfWsRLBvU="} nombre="Productos" />
                </div>
                <div className="fixed top-96 grid grid-cols-2 gap-16 px-[24rem]">
                    <Card imagen={"https://media.istockphoto.com/id/1074942074/es/foto/hombre-de-entrega.webp?b=1&s=170667a&w=0&k=20&c=fcq96RqSHmxmxO-ZdK4dm1DAKZ-7FQZ5Z1msDcikTsY="} nombre="Estado de tu envio" />
                    <Card imagen={"https://images.unsplash.com/photo-1551260627-fd1b6daa6224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFyZ2V0YXMlMjBiYW5jYXJpYXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"} nombre="Metodo de pago" />
                </div>
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

//justify-center justify-between qiutamos esto que nos daba error