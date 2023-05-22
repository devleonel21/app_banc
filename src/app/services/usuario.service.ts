import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  api : string = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get(this.api + 'users')
    .pipe(
      map( (datos : any) => {

        return datos.map( (dato : any) => { 

            return  { 
              'id' : dato.id,
              'nombre' : dato.name,
              'username' : dato.username,
              'direccion' : dato.address.street,
              'correo' : dato.email,
              'phone' : dato.phone,
              'post' : []
            }
         })
      }
      )
    );
  }

  getUserPost(id : number) {
    return this.http.get<any[]>(this.api + 'users/'+id+'/posts');

  }

  createPost(post : any) {
    return this.http.post(this.api + 'posts',post);

  }
}
