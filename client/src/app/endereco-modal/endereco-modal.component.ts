import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-endereco-modal',
  templateUrl: './endereco-modal.component.html',
  styleUrls: ['./endereco-modal.component.scss']
})
export class EnderecoModalComponent implements OnInit {

  endereco : any;

  constructor(@Inject(MAT_DIALOG_DATA) public data : any,
              public dialogRef: MatDialogRef<EnderecoModalComponent>) { }

  ngOnInit(): void {
    this.reset();
    this.edit();
  }

  private edit(){
    if (!this.data){
      return;
    }

    this.endereco = this.data;
  }

  private reset(){
    this.endereco = {
      cep          : '',
      pais         : '',
      estado       : '',
      cidade       : '',
      bairro       : '',
      rua          : '',
      numero       : '',
      complemento  : '',
    }
  }

  salvar(){
    this.dialogRef.close(this.endereco);
  }

  cancelar(){
    this.dialogRef.close();
  }
}
