

import {useEffect, useState } from 'react'
import { useRouter} from 'next/router';
import  Link from 'next/link';

import Layout from '../components/Layout'

import { isAuthenticated } from '../config/isAuth'


const Index =() => {

//  const { data, loading, error } = useQuery(OBTENER_CLIENTES_USUARIO)
  

  const router = useRouter()
  const [autenticado,setAutenticado] = useState(false)
 
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
    }
    
  
  }, []); 
/*  if(loading) return "Cargando...";

   if(!data.obtenerClientesVendedor){

    return router.push('/login')
  }
  */
 
 /*   if(!data.obtenerClientesVendedor){

    return router.push('/login')
  }
  */ 
 
  if(autenticado){
    console.log('autenticado')
        try {

          const resultado = axios.post('http://localhost:3000/api/clientes')
            console.log('clientes: ',resultado);
            
        
    } catch (error) {
        console.log(error)
    }

  return (
   <div>
     
     <Layout>
        <h1 className='text-2xl text-gray-800 font-light'>Clientes</h1>
          <Link href='/nuevocliente' legacyBehavior>
              <a className='bg-blue-800 py-2 px-5 mt-3 inline-block text-white rounded text-sm hover:bg-gray-800 mb-3 uppercase font-bold'>Nuevo Cliente</a>
          </Link>
        <table className='table-auto shadow-md mt-10  w-full w-lg'>
          <thead className='bg-gray-800'>
            <tr className='text-white'>
              <th className='w-1/5 py-2 '>nombre</th>
              <th className='w-1/5 py-2 '>Empresa</th>
              <th className='w-1/5 py-2 '>Email</th>
            </tr>
          </thead>
          <tbody className='bg-white'>
            
            
         {/*    { 
            
            data ?
         (   data.obtenerClientesVendedor.map( cliente =>(
                <tr key={cliente.id}>
                    <td className='border px-4 py-2 '>{cliente.nombre} {cliente.apellido}</td>
                    <td className='border px-4 py-2 '>{cliente.razonsolcial}</td>
                    <td className='border px-4 py-2 '>{cliente.email}</td>
                </tr>
            ))) : <tr></tr> } */}
           </tbody>
        </table>

     </Layout>

     </div>
  )
          }
         
}

export default Index;