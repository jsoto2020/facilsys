import { useState } from "react"
import Layout from "../components/Layout"
import  axios  from "axios"
import { useFormik,Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';

const options = [
    { value: 'rnc',    label: 'RNC' },
    { value: 'cedula', label: 'Cedula' },
    { value: 'pasaporte', label: 'Pasaporte' }
  ];

export const nuevoCliente = () => {

    const [mensaje, guardarMensaje] = useState(null)
    const formik = useFormik({

        initialValues:{
           nombre: ''
           ,razon_social: ''
           ,pais: ''
           ,ciudad: ''
           ,num_rnc: ''
           ,email: ''
           ,tipodocumento: ''
           ,geolocalizacion: ''
           ,sector: ''
           ,direccion1: ''
           ,direccion2: ''
           ,vendedor: ''
           ,tipocliente: ''
           ,telefonooficina: ''
           ,celular: ''

       
        },
        validationSchema: Yup.object({
                nombre: Yup.string()
                           .required('El nombre es obligatorio'),
                razon_social: Yup.string()
                             .required('La Razon Social es obligatorio'),
                pais: Yup.string()
                             .required('Pais es obligatorio'),
                ciudad: Yup.string()
                             .required('Ciudad es obligatorio'),
                num_rnc: Yup.string()
                             .required('RNC o Cedula es obligatorio'),       
                direccion1: Yup.string()
                             .required('Direccion es obligatorio'),
                telefonooficina: Yup.string()
                             .required('Telefono es obligatorio')


        }),
        onSubmit: async valores =>{
        
      
                try {

                    const resultado = axios.post('/api/cliente',JSON.stringify(valores))
                
                    return resultado;
                
            } catch (error) {
                guardarMensaje(error.message.replace('ApolloError:','')) 
                console.log('Error: ',error)
                setTimeout(() => {
                    guardarMensaje(null)
                }, 3000);

            }

  }
  
    })
    const mostrarMensaje= () =>{

        return (
            <div className='bg-white py-2 px-3 w-full my-3 max-w-sm text-center mx-auto'>
               <p> {mensaje}</p>
            </div>
    
        )
    
      }
  return (
    <Layout>
             
        {mensaje && mostrarMensaje()}

        <h1 className='text-center text-2xl  font-light'>Nuevo Cliente</h1>
        <div className='flex justify-center mt-5'>
            <div className='w-full max-w-sm'>
                <form className='bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4'
                        onSubmit={formik.handleSubmit} 
                >
                <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='nombre'>
                            Nombre Cliente
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline'
                                id='nombre'
                                type='text'
                                placeholder='Nombre Usuario'
                                value={formik.values.nombre}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                        />
                    </div>
                    {formik.touched.nombre && formik.errors.nombre ? (
                            <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                                <p className='font-bold'>Error</p>
                                <p>{formik.errors.nombre}</p>
                            </div>
                    ) : null}
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='razon_social'>
                            Razon Social
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline'
                                id='razon_social'
                                type='text'
                                placeholder='Razon Social'
                                value={formik.values.razon_social}
                                onChange={formik.handleChange}
                        />
                    </div>

                    {formik.touched.razon_social && formik.errors.razon_social ? (
                            <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                                <p className='font-bold'>Error</p>
                                <p>{formik.errors.razon_social}</p>
                            </div>
                    ) : null}

                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                            Email
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline'
                                id='email'
                                type='email'
                                placeholder='Email Usuario'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='pais'>
                            Pais
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline'
                                id='pais'
                                type='text'
                                placeholder='Pais'
                                value={formik.values.pais}
                                onChange={formik.handleChange}
                        />
                    </div>

                    {formik.touched.pais && formik.errors.pais ? (
                            <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                                <p className='font-bold'>Error</p>
                                <p>{formik.errors.pais}</p>
                            </div>
                    ) : null}

                     <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='ciudad'>
                            Ciudad
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline'
                                id='ciudad'
                                type='text'
                                placeholder='Ciudad'
                                value={formik.values.ciudad}
                                onChange={formik.handleChange}
                        />
                    </div>

                    {formik.touched.ciudad && formik.errors.ciudad ? (
                            <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                                <p className='font-bold'>Error</p>
                                <p>{formik.errors.ciudad}</p>
                            </div>
                    ) : null}

                 <div className='mb-4'>
                      <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='tipodocumento'>
                                Tipo Documento
                        </label>

                        <select id="myComboBox" name="myComboBox" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                            focus:outline-none focus:shadow-outline'>
                            <option value="">Seleccione una opción</option>
                            <option value="rnc">RNC</option>
                            <option value="cedula">Cedula</option>
                            <option value="pasaporte">Pasaporte</option>
                        </select>

                    
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='num_rnc'>
                            Numero RNC
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline'
                                id='num_rnc'
                                type='text'
                                placeholder='RNC'
                                value={formik.values.num_rnc}
                                onChange={formik.handleChange}
                        />
                    </div>

                    
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='direccion1'>
                            Direccion 1
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline'
                                id='direccion1'
                                type='text'
                                placeholder='Direccion'
                                value={formik.values.direccion1}
                                onChange={formik.handleChange}
                        />
                    </div>

                    {formik.touched.direccion1 && formik.errors.direccion1 ? (
                            <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                                <p className='font-bold'>Error</p>
                                <p>{formik.errors.direccion1}</p>
                            </div>
                    ) : null}

                    
                     <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='direccion2'>
                            Direccion 2
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline'
                                id='direccion2'
                                type='text'
                                placeholder='Direccion 2'
                                value={formik.values.direccion2}
                                onChange={formik.handleChange}
                        />
                    </div>

                    
                      <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='telefonooficina'>
                            Telefono Oficina
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline'
                                id='telefonooficina'
                                type='text'
                                placeholder='Telefono Oficina'
                                value={formik.values.telefonooficina}
                                onChange={formik.handleChange}
                        />
                    </div>

                    {formik.touched.telefonooficina && formik.errors.telefonooficina ? (
                            <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                                <p className='font-bold'>Error</p>
                                <p>{formik.errors.telefonooficina}</p>
                            </div>
                    ) : null}
                    
                    <input
                        type='submit'
                        className='bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900'
                        value='Nuevo Cliente'
                    />
                </form>
            </div>

        </div>
    </Layout>
    
  )
}
export default nuevoCliente;