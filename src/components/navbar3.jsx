import { Link } from "react-router-dom";


export default function Navbar3() {
    return (
        <div>
            <div>
                <div className="bg-black text-white fixed top-0 w-full flex flex-row justify-between px-12 py-1  items-center gap-16">
                    <div className="fixed top-12 px-28 text-2xl py-2">
                        <div className="">
                            <Link to={"/"} className="text-white hover:text-yellow-600">Inicio</Link>
                        </div>
                    </div>
                    <div className="items-center px-[35rem]">
                        <div>
                            <img src="src\images\belle chose.png" height={150} width={150} items-center></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

