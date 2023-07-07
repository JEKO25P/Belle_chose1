import Navbar from "./components/Navbar";
import Fondo from "./components/fondo";
import Footer from "./components/footer";
import RoundCards from "./components/roundcards";

export default function Busqueda() {
    return (
        <div>

            <div>
                <Navbar />
            </div>
            <div>
                <Fondo />
            </div>
            <div className="text-black fixed top-40 px-[30rem] text-xs">
                <h1>Busqueda para "Labial"</h1>
            </div>
            <div>
                <div className="fixed top-64 grid grid-cols-4 gap-20 px-72 justify-between">
                    <RoundCards imagen={"https://media.istockphoto.com/id/1397036540/es/foto/l%C3%A1piz-labial-rosa-sobre-fondo-blanco-ilustraci%C3%B3n-3d.webp?b=1&s=170667a&w=0&k=20&c=7VJqXYH-aSNOVkz03yuT42p9I9zzkMfjac_s7ExHhCY="} nombre={"JULIO"} direccion={"ver mas..."} />
                    <RoundCards imagen={"https://media.istockphoto.com/id/1397036536/es/foto/l%C3%A1piz-labial-brillante-sobre-fondo-colorido-ilustraci%C3%B3n-3d-de-producto-de-maquillaje.webp?b=1&s=170667a&w=0&k=20&c=FD4iRjCand4FgY-TZHT5U-iERmdh-kl-NkBi3LkIhiI="} nombre={"JULIO"} direccion={"ver mas..."} />
                    <RoundCards imagen={"https://media.istockphoto.com/id/1410657733/es/foto/ilustraci%C3%B3n-3d-maqueta-de-l%C3%A1piz-labial-cosm%C3%A9tico-de-varios-estilos.webp?b=1&s=170667a&w=0&k=20&c=junpM0T30xmG56PTKMKt7gr6FzWjzGM39bHrR_EzWuc="} nombre={"JULIO"} direccion={"ver mas..."}/>
                    <RoundCards imagen={"https://media.istockphoto.com/id/1458639401/es/foto/primer-plano-de-l%C3%A1piz-labial-rojo-sobre-fondo-rosa.webp?b=1&s=170667a&w=0&k=20&c=GBtr8fGDXU2Nl25klZH8XDmOhZQSBsJRzAwlaxtLuk4="} nombre={"JULIO"} direccion={"ver mas..."}/>
                </div>
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}