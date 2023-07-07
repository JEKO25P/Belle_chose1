import Navbar2 from "./components/Navbar2"
import Fondo from "./components/fondo"
import Footer from "./components/footer"

export default function Ayuda(){
    return(
        <div>
            <div>
                <Navbar2/>
            </div>
            <div>
                <Fondo />
            </div>
            <div className="fixed top-40 px-96 justify-center text-black text-type-bold" >
                <h1>Preguntas Frecuentes</h1>
            </div>
            <div className="fixed top-64 px-16 justify-center text-black text-type-bold">
                <h2>Lorem ipsum dolor sit amet consectetur adipiscing elit cursus penatibus, eleifend vitae congue nascetur vivamus class ornare venenatis blandit mollis, massa morbi porta molestie sem urna quis tortor. Turpis curabitur faucibus taciti vestibulum torquent pretium sagittis et morbi, id tortor blandit augue netus congue nullam viverra facilisis, dapibus nunc ad pellentesque etiam odio aliquam elementum. Euismod mauris curae at quis sapien tempus cum proin semper, fringilla sem parturient dictumst consequat nam nulla pharetra, ultrices dictum aliquam dignissim massa libero primis commodo.
Erat vivamus condimentum egestas aliquam in semper habitasse, sagittis nisl senectus per laoreet ante, varius commodo venenatis mus pretium viverra. Est conubia sociis viverra aenean mauris urna senectus fermentum nec eleifend, vel ullamcorper class nunc accumsan rhoncus suscipit laoreet curabitur, penatibus lobortis ante lacus condimentum nullam egestas leo augue. Aliquet vivamus mi molestie leo feugiat habitasse cum tellus non enim purus est, sagittis montes hac facilisi platea lectus ultricies blandit risus pretium agittis nisl senectus per laoreet ante, varius commodo venenatis mus pretium viverra. Est conubia sociis viverra aenean mauris urna senectus fermentum nec eleifend, vel ullamcorper class nunc accumsan rhoncus suscipit laoreet curabitur, penatibus lobortis ante lacus condimentum nullam egestas leo augue. Aliquet vivamus mi molestie leo feugiat habitasse cum tellus non enim purus est, sagittis montes hac facilisi platea lectus ultricies blandit risus pretiu</h2>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    )
}