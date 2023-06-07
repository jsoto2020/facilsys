
import { connectToDB } from './db';
const bcryptjs = require('bcryptjs');
require('dotenv').config({ path:'variables.env'});
const jwt = require('jsonwebtoken')

export default async function handler(req, res) {
  const pool = await connectToDB();

 const nombreObjeto = Object.keys(req.body)
 const {email,num_rnc,nombre,razon_social,direccion1,direccion2,geolocalizacion,pais,sector,telefonooficina,tipocliente,tipodocumento,vendedor,ciudad,celular } = JSON.parse(nombreObjeto[0])
 
 

  if (pool) {
  
      //  const salt = await bcryptjs.genSalt(10);
      //  const bpassword = await bcryptjs.hash(aclave, salt)
      const clienteexiste = await pool.request().query(`SELECT a.email FROM clientes a WHERE a.email ='${email}'`);

      if(clienteexiste.recordset.length != 0 ){
        console.log('email:',email)
          return res.status(500).send(`Email cliente existe`);
      }

      const rncexiste = await pool.request().query(`SELECT a.num_rnc FROM clientes a WHERE a.num_rnc ='${num_rnc}'`);

      if(rncexiste.recordset.length != 0 ){

          return res.status(500).send(`RNC cliente existe`);
      }

      try {
       
        const result = await pool.request().query(`INSERT INTO [dbo].[clientes]
                   (tipodocumento
                    ,[num_rnc]
                   ,[nombre]
                   ,[razon_social]
                   ,[pais]
                   ,[ciudad]
                   ,[geolocalizacion]
                   ,[sector]
                   ,[direccion1]
                   ,[direccion2]
                   ,[vendedor]
                   ,[tipocliente]
                   ,[telefonooficina]
                   ,[celular]
                   ,[email]
                   ,[created_at]
                   ,[created])
             VALUES
                   ('${tipodocumento}'
                    ,'${num_rnc}'
                   ,'${nombre}'
                   ,'${razon_social}'
                   ,'${pais}'
                   ,'${ciudad}'
                   ,'${geolocalizacion}'
                   ,'${sector}'
                   ,'${direccion1}'
                   ,'${direccion2}'
                   ,'${vendedor}'
                   ,'${tipocliente}'
                   ,'${telefonooficina}'
                   ,'${celular}'
                   ,'${email}'
                   ,getdate()
                   ,'TEMPORAL')
        `);
        
        console.log('resultado: ',result)
        
        return res.status(200).send('Cliente adicionado existosamente')
             
      } catch (error) {
        return  res.status(500).send(`Error en conexion ${error}`);
      }
        
    } 
  
}


const crearToken = (usuario,secreta, expiresIn) =>{

  
  const { email} = usuario;

  return jwt.sign({ email }, secreta, { expiresIn })
}

