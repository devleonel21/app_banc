import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  getConexion(correo: string, password: string, recordar : boolean){
    if (correo === 'correo@gmail.com' && password === 'contraseña') {
      Swal.fire({
        icon: 'success',
        title: 'Bienvenido al aplicativo',
        showConfirmButton: false,
        timer: 1500
      })
      this.iniciarSession(correo,recordar);
    } else {
      Swal.fire( 'Error...!!',  'No se ha podido generar el acceso al aplicativo, verificar los datos ingresados', 'error' )
    }

  }

  iniciarSession(correo:string, recordar : boolean) {
    const sessionData = {
      correo: correo,
      expiry: new Date().getTime() + 15 * 60 * 1000 
    };
    localStorage.setItem('session', JSON.stringify(sessionData));
    localStorage.removeItem('remember');
    
    if(recordar){ 
      
      localStorage.setItem('remember', correo);
    }

    this.router.navigate(['/principal']);
  }

  isLoggedIn() {
    const expirationTime = localStorage.getItem('session');
    if (expirationTime) {
      const sessionUser = JSON.parse(expirationTime);
      const currentTime = new Date().getTime();
      return currentTime < sessionUser.expiry;
    }
    return false;
  }

  isRemember(){
    return localStorage.getItem('remember');
  }

  logout(){
    localStorage.removeItem('session');
    this.router.navigate(['/login']);
  }

  
}
