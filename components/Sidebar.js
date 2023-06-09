import Link from 'next/link'
import React from 'react'
import { useRouter} from 'next/router';

export const Sidebar = () => {
 const router = useRouter()

  return (
    <aside className='bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5'>
        <div >
            <p className='text-white text-2xl font-black'>ERP FacilSys</p>
        </div>
        <nav className='mt-5 list-none'>
            <li className={ router.pathname === "/" ? "bg-blue-800 p-2" : "p-2" }>
                <Link href="/" legacyBehavior>
                    <a className='text-white mb-2 block'>Clientes</a>
                  
                </Link>
             </li>   
             <li className={ router.pathname === "/cotizaciones" ? "bg-blue-800 p-2" : "p-2" }>
                <Link href="/cotizaciones" legacyBehavior>
                    <a className='text-white  block'>Cotizaciones</a>
                  
                </Link>
             </li>   
             <li className={ router.pathname === "/pedidos" ? "bg-blue-800 p-2" : "p-2" }>
                <Link href="/pedidos" legacyBehavior>
                    <a className='text-white  block'>Ordenes</a>
                  
                </Link>
             </li>   
             <li className={ router.pathname === "/productos" ? "bg-blue-800 p-2" : "p-2" }>
                <Link href="/productos" legacyBehavior>
                    <a className='text-white  block'>Inventarios</a>
                  
                </Link>
             </li>   
         
        </nav>
    </aside>
  )
}
