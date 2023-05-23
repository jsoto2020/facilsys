import jwtDecode from 'jwt-decode';
import { getAuthToken } from '../config/getToken';

export  function isAuthenticated() {
    const token = getAuthToken();

    if (token) {
        try {
          const decodedToken = jwtDecode(token);
          const currentTime = Date.now() / 1000; // Convertir a segundos
    
          
          if(decodedToken.exp > currentTime){
                return true
          }
          
        } catch (error) {
          return false;
        }
      }
    
    return false;
  }

  