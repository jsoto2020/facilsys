import sql from 'mssql';
const config = {
    user: 'jsoto',
    password: 'lmmjvsd2014',
    server: 'mbsrd.ddns.net',
    database: 'facildb',
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: 'MSSQLSERVER'
    },
    port: 1454
}

export async function connectToDB() {
  try {
    const pool = await sql.connect(config);
    console.log('Conectado a la base de datos');
    return pool;
  } catch (error) {
    console.log(`Error de conexión: ${error}`);
    return null;
  }
}
