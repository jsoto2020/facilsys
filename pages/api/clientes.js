
import { connectToDB } from './db';
const bcryptjs = require('bcryptjs');
require('dotenv').config({ path:'variables.env'});
const jwt = require('jsonwebtoken')

export default async function handler(req, res) {
  const pool = await connectToDB();

 /* const nombreObjeto = Object.keys(req.body)
 const { } = JSON.parse(nombreObjeto[0])
  */

 const clientes = await PollingWatchKind.request().query(`select * from clientes`)

  if (clientes) {
  
    return res.status(200).send(JSON.stringify(clientes));   
}
else{
  return res.status(400).send('No existen clientes');   
}
}