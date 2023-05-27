
import { useState } from 'react'
import { useRouter } from 'next/router';


import { useFormik } from 'formik'
import * as Yup from 'yup';

import axios from 'axios';

import Layout from '../components/Layout'


export const Login = () => {

    const [mensaje, guardarMensaje] = useState(null);
    

    const router = useRouter()

    const formik = useFormik({

        initialValues:{
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                      .email('Debe ser un email valido')
                      .required('Email debe ser obligatorio'),
            password: Yup.string()
                         .required('El password es obligatorio')
        }),
        onSubmit: async valores =>{
            
            axios.post(`/api/autenticarusuario`, JSON.stringify(valores))
                        .then((response) => {
                            const {data } = response;
                            guardarMensaje('Autenticando...')
                            


                            // Resto del código para manejar la respuesta...
                            //Guardar Token en localstorage
//                              const  token  =data;
                       
                              const userdatos ={
                                  token: data.token,
                                  nombre: data.nombre,
                                  apellido: data.apellido,
                                  email: data.email  

                              }
                              const jsonData = JSON.stringify(userdatos);

                              localStorage.removeItem(userdatos);  
                              localStorage.setItem('MisDatos',jsonData)
                            
                            // Redireccionar
                            setTimeout(() => {
                                guardarMensaje(null)
                                router.push('/')
                            }, 3000);

                        })
                        .catch((error) => {
                            
                    
                        guardarMensaje(error.response) 

                        setTimeout(() => {
                            guardarMensaje(null)
                        }, 3000);
                            
                        });
                        


/*             try {

                 const resultado = axios.post('http://localhost:3000/api/autenticarusuario',JSON.stringify(valores))
                    
                    return resultado;
                
            } catch (error) {
                console.log('autenticar: ',error);
                guardarMensaje(error.message.replace('ApolloError:','')) 

                setTimeout(() => {
                    guardarMensaje(null)
                }, 3000);
     
            } */
              }
              
    });
    const mostrarMensaje= () =>{

        return (
            <div className='bg-white py-2 px-3 w-full my-3 max-w-sm text-center mx-auto'>
               <p> {mensaje}</p>
            </div>
    
        )
    
      };

  return (
    <>
    <Layout>
       
       {mensaje && mostrarMensaje()}

       <h1 className='text-center text-2xl text-white font-light'>Login</h1>
       <div className='flex justify-center mt-5'>
            <div className='w-full max-w-sm'>
                <form className='bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4' onSubmit={formik.handleSubmit}>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                            Email
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                          focus:outline-none focus:shadow-outline'
                               id='email'
                               type='email'
                               placeholder='Email Usuario'
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               value={formik.values.email}
                        />
                    </div>
                    {formik.touched.email && formik.errors.email ? (
                            <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                                <p className='font-bold'>Error</p>
                                <p>{formik.errors.email}</p>
                            </div>
                    ) : null}
                
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                            Password
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                          focus:outline-none focus:shadow-outline'
                               id='password'
                               type='password'
                               placeholder='Password Usuario'
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               value={formik.values.password}
                        />
                    </div>
                      {formik.touched.password && formik.errors.password ? (
                            <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                                <p className='font-bold'>Error</p>
                                <p>{formik.errors.password}</p>
                            </div>
                    ) : null}

                    <input
                        type='submit'
                        className='bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900'
                        value='Iniciar Sesion'
                    />
                </form>
            </div>

       </div>
    </Layout>
    </>
  )
}

export default Login;