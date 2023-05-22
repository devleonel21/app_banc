import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
hide : boolean = true
correo: string | any = '';
password: string = '';
recordar : boolean = false;

  constructor(private router: Router,private authService : AuthService) { 
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/principal']);
    }

    if (this.authService.isRemember()) {
      const _correo = this.authService.isRemember();
      this.correo = _correo;
      this.recordar = true;
    }
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.getConexion(this.correo,this.password,this.recordar);
  }

   


}
