import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <footer className="bg-black fixed top-[33rem] w-full flex flex-row gap-44 py-2 justify-center">
            <div className="text-white flex flex-col justify-center">
                <h3 className="text-2xl flex flex-row font semibold">Conócenos</h3>
                <ul>
                    <Link className="text-white hover:text-yellow-600">Acerca de nosotros</Link>
                </ul>
            </div>
            <div className="text-white flex flex-col justify-center">
                <h1 className="text-4xl flex flex-row px-20">Contacto</h1>
                <div className="flex flex-row gap-16">
                    <div>
                        <h1 className="text-2xl">Telefono</h1>
                        <div>9982299513</div>
                    </div>
                    <div className="flex flex-row gap-6 py-2">
                        <Link to={""}><box-icon name='whatsapp' type='logo' color='rgba(239,230,230,0.98)' size='lg' ></box-icon></Link>
                        <Link to={"https://www.facebook.com/"}><box-icon name='facebook-circle' type='logo' color='rgba(239,230,230,0.98)' size='lg' ></box-icon></Link>
                    </div>
                </div>
            </div>
            <div className="text-white flex flex-col justify-center">
                <h3 className="text-2xl flex flex-row px-20">Ayuda</h3>
                <div className="flex flex-row gap-4">
                    <div>
                        <Link to={"/"} className="text-xl text-white hover:text-yellow-600">Terminos y <br /> Condiciones</Link>
                    </div>
                    <div>
                        <Link to={"/"} className="text-xl text-white hover:text-yellow-600">Preguntas <br />Frecuentes</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}