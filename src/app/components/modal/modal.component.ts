import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  title: string = '';
  body: string = '';

  constructor(private usuarioService: UsuarioService,
              public dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { id: number }) { }

  ngOnInit(): void {
  }

  createPost() {
    const postData = {
      title: this.title,
      body: this.body,
      userId : this.data.id
    };

    this.usuarioService.createPost(postData).subscribe( (response : any) => {
      
      console.log('Post created:', response);
      Swal.fire( 'Registrado...!!','Se ha registrado el POST correctamente', 'success' )
      this.dialogRef.close();
      
    });

    
  }

}
