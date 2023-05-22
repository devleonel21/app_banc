import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  
  dataSource : Usuario[] = [];
  columns = ['nombre', 'username', 'direccion', 'correo', 'phone' ];
  columnsWithExpand = [...this.columns, 'expand'];
  expandedElement: Usuario | any;
  constructor(private router: Router,
              private authService : AuthService, 
              private usuarioService: UsuarioService,
              public dialog: MatDialog ) { 

    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }

    this.usuarioService.getUser().subscribe(user => {
      this.dataSource = user;
      this.loadPostsForUsers();
    })
  }

  ngOnInit(): void {
  }

  loadPostsForUsers() {
    for (const user of this.dataSource) {
      this.usuarioService.getUserPost(user.id).subscribe(posts => {
        user.post = posts;
      });
    }
  }

  openModal(id:number) {

    const dialogRef = this.dialog.open(ModalComponent, {
      data: { id: id },
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Cerrando Modal');
    });
  }

  logout(){
    this.authService.logout();
  }

}

 
