
import React,{useEffect, useState} from 'react'

import { useRouter } from 'next/router'
import { isAuthenticated } from '../config/isAuth';


export const Header = () => {

    const router = useRouter()
    const [autenticado,setAutenticado] = useState(false)
    const [datos, setDatos] = useState({nombre: '', apellido: '',email: '', token:''})
    useEffect(() => {
      // Realizar la redirección utilizando router.push
      const authenticated = isAuthenticated();
      if(!authenticated) 
      {
        const autenticado = false;
        setAutenticado(autenticado)
        router.push('/login')
      }else{
        const autenticado = true;
        setAutenticado(autenticado)
        const datos = JSON.parse(localStorage.getItem('MisDatos'));
        setDatos(datos);

      }
      
    
    }, []); 

    

    
    

    const cerrarSesion = ()=>{
 
       localStorage.removeItem('MisDatos');
     
        router.push('/login')
    }

   if(autenticado){
 
      return (
        <div className='flex justify-between mb-6'>
            <p className='mr-2'>Hola: { datos.nombre } { datos.apellido } </p>

            <button 
                onClick={()=> cerrarSesion()}
                className='bg-gray-800 w-full sm:w-auto font-bold  uppercase text=xs rounded py-1 px-2 text-white shadow-md'
                type='button'>Cerrar Sesion</button>    
        </div>
      )
   }   
}
export default Header;