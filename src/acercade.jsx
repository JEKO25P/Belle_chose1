import Navbar2 from "./components/Navbar2";
import Fondo from "./components/fondo";
import Footer from "./components/footer";

export default function AcercaDe (){
    return (
        <div>
            <div>
                <Navbar2 />
            </div>
            <div>
                <Fondo />
            </div>

            <div className="fixed px-[36rem] top-40  justify-center text-black text-type-bold">
                <h1>Nosotros</h1>
            </div>
            

            <div className="flex flex-row gap-52 px-3">
                <div >
                    <div className="flex flex-col fixed px-20 top-56  justify-center text-black">
                        <h2 className="text-3xl bold">¿Quienes Somos?</h2>
                        <h2> Somos una empresa innovadora que busca Lorem ipsum dolor <br/>sit amet consectetur adipiscing elit cursus penatibus, eleifend vitae<br/> congue nascetur vivamus class ornare venenatis blandit mollis, massa <br/>morbi porta molestie sem urna quis tortor. Turpis curabitur faucibus  <br/>tacitivestibulum torquent pretium sagittis et morbi, id tortor blandit <br/>augue netus congue nullam viverra facilisis, dapibus nunc ad <br/>pellentesqueetiam odio aliquam elementum. Euismod mauris curae<br/> at quis sapien tempus cum proin semper, fringilla sem parturient<br/> dictumst consequat nam nulla pharetra, ultrices dictum aliquam.
                        </h2>
                    </div>
                </div>
                <div >
                    <div className="flex flex-col fixed top-56 right-px px-20 justify-center text-black ">
                        <h2 className="text-3xl bold">Nuestra Experiencia</h2>
                        <h2> Somos una empresa innovadora que busca Lorem ipsum dolor <br/>sit amet consectetur adipiscing elit cursus penatibus, eleifend vitae<br/> congue nascetur vivamus class ornare venenatis blandit mollis, massa <br/>morbi porta molestie sem urna quis tortor. Turpis curabitur faucibus  <br/>tacitivestibulum torquent pretium sagittis et morbi, id tortor blandit <br/>augue netus congue nullam viverra facilisis, dapibus nunc ad <br/>pellentesqueetiam odio aliquam elementum. Euismod mauris curae<br/> at quis sapien tempus cum proin semper, fringilla sem parturient<br/> dictumst consequat nam nulla pharetra, ultrices dictum aliquam.
                        </h2>
                    </div>
                </div>  
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );

}