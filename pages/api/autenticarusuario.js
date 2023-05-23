
import { connectToDB } from './db';
const bcryptjs = require('bcryptjs');
require('dotenv').config({ path:'variables.env'});
const jwt = require('jsonwebtoken')

export default async function handler(req, res) {
  const pool = await connectToDB();

 const nombreObjeto = Object.keys(req.body)
 const {email,password } = JSON.parse(nombreObjeto[0])
 

  if (pool) {
  
    try {
      //  const salt = await bcryptjs.genSalt(10);
      //  const bpassword = await bcryptjs.hash(aclave, salt)
          
        const result = await pool.request().query(`SELECT a.email,a.password,a.nombre,a.apellido FROM usuarios a WHERE a.email='${email}'`);
      
        if(result.recordset.length === 0 ){

            return res.status(500).send(`Email no existe`);
        }

        const usuario = result.recordset[0]
        
         const passwordCorrecto = await bcryptjs.compare(password, usuario.password)
         
        if (!passwordCorrecto) {
            return res.status(500).send(`Clave Incorrecta`);
        } 

        

        const token= crearToken(usuario, process.env.SECRETA, '24h')
        
        const dataTosend = {
            token: token,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            email: usuario.email

        }       
        
        return res.status(200).send(dataTosend)
            
        
    } catch (error) {
    
      return res.status(500).send(`Error en conexion ${error}`);
    } finally {
      pool.close();
    }
  } else {
    return res.status(500).send('No se pudo conectar a la base de datos');
  }
}


const crearToken = (usuario,secreta, expiresIn) =>{

  
  const { email} = usuario;

  return jwt.sign({ email }, secreta, { expiresIn })
}

