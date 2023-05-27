
import { connectToDB } from './db';
const bcryptjs = require('bcryptjs');
require('dotenv').config({ path:'variables.env'});
const jwt = require('jsonwebtoken')

export default async function handler(req, res) {
  const pool = await connectToDB();

 const nombreObjeto = Object.keys(req.body)
 const {email } = JSON.parse(nombreObjeto[0])
 console.log('email:',email)

  if (pool) {
  
    try {
      //  const salt = await bcryptjs.genSalt(10);
      //  const bpassword = await bcryptjs.hash(aclave, salt)
      const clienteexiste = await pool.request().query(`SELECT a.email FROM clientes a WHERE a.email =${email}`);

      if(clienteexiste.recordset.length != 0 ){

          return res.status(500).send(`Email cliente existe`);
      }

      const rncexiste = await pool.request().query(`SELECT a.num_rnc FROM clientes a WHERE a.email =${numrnc}`);

      if(rncexiste.recordset.length != 0 ){

          return res.status(500).send(`RNC cliente existe`);
      }

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
                   (tipodocumento
                    ,<num_rnc, varchar(50),>
                   ,<nombre, varchar(100),>
                   ,<razon_social, varchar(100),>
                   ,<pais, nchar(10),>
                   ,<ciudad, nchar(10),>
                   ,<geolocalizacion, varchar(50),>
                   ,<sector, varchar(50),>
                   ,<direccion1, varchar(100),>
                   ,<direccion2, varchar(100),>
                   ,<vendedor, varchar(100),>
                   ,<tipocliente, int,>
                   ,<telefonooficina, varchar(25),>
                   ,<celular, varchar(25),>
                   ,<email, varchar(100),>
                   ,<created_at, datetime,>
                   ,<created, varchar(100),>)
        '`);
        

        
        return res.status(200).send('Cliente adicionado existosamente')
            
        
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

