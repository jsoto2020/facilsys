
export function   getAuthToken () {
  try {
    const datos = localStorage.getItem('MisDatos');
    
    const jsonData = JSON.parse(datos)
    const { token } = jsonData;

    return token;
  } catch (error) {
    return error;
  }
    
  }
  