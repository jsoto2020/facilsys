import Layout from "../components/Layout"
import { useFormik,Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';

const options = [
    { value: 'rnc',    label: 'RNC' },
    { value: 'cedula', label: 'Cedula' },
    { value: 'pasaporte', label: 'Pasaporte' }
  ];

export const nuevoCliente = () => {


    const formik = useFormik({

        initialValues:{
            tipodocumento: ''
            ,num_rnc: ''
           ,nombre: ''
           ,razon_social: ''
           ,pais: ''
           ,ciudad: ''
           ,geolocalizacion:''
           ,sector:''
           ,direccion1: ''
           ,direccion2:''
           ,vendedor:''
           ,email: ''
           ,tipomoneda: ''
           ,tipocliente:''
           ,telefonooficina: ''
           ,celular:''
        },
        validationSchema: Yup.object({
                nombre: Yup.string()
                           .required('El nombre es obligatorio'),
                razon_solcia: Yup.string()
                             .required('La Razon Social es obligatorio'),
                pais: Yup.string()
                             .required('Pais es obligatorio'),
                ciudad: Yup.string()
                             .required('Ciudad es obligatorio'),
                sector: Yup.string()
                             .required('Sector es obligatorio'),
                direccion1: Yup.string()
                             .required('Direccion es obligatorio'),
                tipocliente: Yup.string()
                             .required('El tipo de cliente es obligatorio'),
                email: Yup.string()
                          .email('Email no es valido')  
                          .required('El email es obligatorio'),
                tipomoneda: Yup.string()
                                 .required('Tipo de moneda para este cliente es obligatorio')
               


        }),
        onSubmit: async valores =>{
      //      console.log(" valores: ",valores);
      
                try {

                    const resultado = axios.post('http://localhost:3000/api/cliente',JSON.stringify(valores))
                    console.log('cliente: ',resultado);
                    return resultado;
                
            } catch (error) {
                guardarMensaje(error.message.replace('ApolloError:','')) 

                setTimeout(() => {
                    guardarMensaje(null)
                }, 3000);

            }
  }
    })
  return (
    <Layout>
            <div><h1 className='text-2xl text-gray-800 font-light'>Nuevo Cliente</h1></div>

        <div className="flex justify-center mt-5"> 
        <div className="w-full md:max-w-lg">
            <form
                onSubmit={formik.handleSubmit}
                className="bg-white shadow-md px-8 pt-6 pb-8 mb-4"
            >
            <div className='mb-4 grid grid-cols-2 gap-4'>
                
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='tipodocumento'>
                        Tipo Documento
                </label>

                <select id="myComboBox" name="myComboBox" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                    focus:outline-none focus:shadow-outline'>
                    <option value="">Seleccione una opción</option>
                    <option value="option1">Opción 1</option>
                    <option value="option2">Opción 2</option>
                    <option value="option3">Opción 3</option>
                </select>
                

                
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='num_rnc'>
                        Numero RNC o Cedula
                    </label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                    focus:outline-none focus:shadow-outline'
                        id='num_rnc'
                        type='text'
                        placeholder='RNC o Cedula Cliente'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.num_rnc} 
                    />
                </div>
                {formik.touched.num_rnc && formik.errors.num_rnc ? (
                    <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                        <p className='font-bold'>Error</p>
                        <p>{formik.errors.num_rnc}</p>
                    </div>
            ) : null}

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='nombre'>
                        Nombre
                    </label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                    focus:outline-none focus:shadow-outline'
                        id='nombre'
                        type='text'
                        placeholder='Nombre Cliente'
                            onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.nombre} 
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
                        placeholder='Razon Social Cliente'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.razon_social} 
                    />
                </div>
                {formik.touched.razon_social && formik.errors.razon_social ? (
                    <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                        <p className='font-bold'>Error</p>
                        <p>{formik.errors.razon_social}</p>
                    </div>
            ) : null}


                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='direccion1'>
                        Direccion
                    </label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                    focus:outline-none focus:shadow-outline'
                        id='direccion1'
                        type='text'
                        placeholder='Direcion Empresa'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.direccion1} 
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
                        Direccion 
                    </label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                    focus:outline-none focus:shadow-outline'
                        id='direccion2'
                        type='text'
                        placeholder='Direccion Empresa'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.direccion2} 
                    />
                </div>
        
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='vendedor'>
                        Vendedor
                    </label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                    focus:outline-none focus:shadow-outline'
                        id='vendedor'
                        type='text'
                        placeholder='Ejecutivo Ventas'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.vendedor} 
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                        Email Cliente
                    </label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                    focus:outline-none focus:shadow-outline'
                        id='email'
                        type='text'
                        placeholder='Email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email} 
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='tipomoneda'>
                        Moneda
                    </label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                    focus:outline-none focus:shadow-outline'
                        id='tipomoneda'
                        type='text'
                        placeholder='Moneda'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.tipomoneda} 
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='tipocliente'>
                        Tipo Cliente
                    </label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                    focus:outline-none focus:shadow-outline'
                        id='tipocliente'
                        type='text'
                        placeholder='Tipo Cliente'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.tipocliente} 
                    />
                </div>
                {formik.touched.tipomoneda && formik.errors.tipomoneda ? (
                    <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                        <p className='font-bold'>Error</p>
                        <p>{formik.errors.tipomoneda}</p>
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
                        placeholder='Email Cliente'
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
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='telefonooficina'>
                        Telefono Oficina
                    </label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                    focus:outline-none focus:shadow-outline'
                        id='telefonooficina'
                        type='tel'
                        placeholder='Telefono Cliente'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.telefonooficina} 
                    />
                </div>
                
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='celular'>
                        Celuar Contacto
                    </label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                    focus:outline-none focus:shadow-outline'
                        id='Celular'
                        type='tel'
                        placeholder='Celuar Cliente'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.celular} 
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='pais'>
                        Pais
                    </label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                    focus:outline-none focus:shadow-outline'
                        id='pais'
                        type='tel'
                        placeholder='Telefono Cliente'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.pais} 
                    />
                </div>
                

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='ciudad'>
                        Ciudad
                    </label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                    focus:outline-none focus:shadow-outline'
                        id='ciudad'
                        type='tel'
                        placeholder='Telefono Cliente'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.ciudad} 
                    />
                </div>
                
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='sector'>
                        Sector
                    </label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                                    focus:outline-none focus:shadow-outline'
                        id='sector'
                        type='tel'
                        placeholder='Telefono Cliente'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.sector} 
                    />
                </div>

                <input
                    type="submit"
                    className="bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900"
                    value="Registrar Cliente"
                />
                
            </form>
            </div> 
        </div>
    </Layout>
    
  )
}
export default nuevoCliente;