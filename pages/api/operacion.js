
import { connectToDB } from './db';
const bcryptjs = require('bcryptjs');

export default async function handler(req, res) {
  const pool = await connectToDB();

 // const {nombre, apellido, email,password} = JSON.parse(req.body);
 //const insdata = JSON.parse(req.body)
 const nombreObjeto = Object.keys(req.body)
 const {nombre, apellido, email,password} = JSON.parse(nombreObjeto[0])
 

  if (pool) {
    try {
        
        const salt = await bcryptjs.genSalt(10);
        const bpassword = await bcryptjs.hash(password, salt)

        const result = await pool.request().query(`INSERT INTO usuarios (usuario,nombre,apellido,email,password,fecha_creacion) values('${email}','${nombre}','${apellido}','${email}','${bpassword}',getdate())`);
      
      pool.close()
        return res.status(200).json(result.recordset);
    } catch (error) {
    
      return res.status(500).send(`Error al insertar datos: ${error}`);
    } finally {
      pool.close();
    }
  } else {
    return res.status(500).send('No se pudo conectar a la base de datos');
  }
}



