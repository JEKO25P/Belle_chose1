import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)



//<div className="fixed top-12 px-[54rem] text-4xl py-2 ">
//<div className="flex flex-row gap-20">
    //<Link to={"/"} className="text-white hover:text-yellow-600">Inicio</Link>
    //<box-icon name='user-circle' type='solid' color='rgba(239,230,230,0.98)' size='lg' ></box-icon>
    //<box-icon name='cart-alt' color='rgba(239,230,230,0.98)' size='lg'></box-icon>
//</div>
//</div>