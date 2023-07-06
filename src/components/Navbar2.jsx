import { Link } from "react-router-dom";


export default function Navbar2(){
    return(
        <div>
             <div>
                <div className="bg-black text-white fixed top-0 w-full flex flex-row justify-between px-12 py-16 items-center gap-16">
                    
                    <div className="items-center px-[35rem] fixed top-0">
                        <div>
                            <img src="src\images\belle chose.png" width={120} items-center></img>
                        </div>
                    </div>
                     <div className="fixed top-12 px-[54rem] text-4xl py-2 ">
                        <div className="flex flex-row gap-20">
                            <Link to={"/"} className="text-white hover:text-yellow-600">Inicio</Link>
                            <box-icon name='user-circle' type='solid' color='rgba(239,230,230,0.98)' size='lg' ></box-icon>
                            <box-icon name='cart-alt' color='rgba(239,230,230,0.98)' size='lg'></box-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        
}