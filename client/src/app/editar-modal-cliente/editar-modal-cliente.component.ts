import { InjectFlags } from '@angular/compiler/src/core';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';

export interface DialogDataCliente {
  cliente : Array<any>;
  nomefantasia: any;
razaosocial: any;
}

@Component({
  selector: 'app-editar-modal-cliente',
  templateUrl: './editar-modal-cliente.component.html',
  styleUrls: ['./editar-modal-cliente.component.scss']
})
export class EditarModalClienteComponent implements OnInit {
cliente : Array<any> = [];
nomefantasia: any;
razaosocial: any;
  original: Array<any> = [];
  dialog: any;

  constructor(private httpService : HttpService, @Inject(MAT_DIALOG_DATA) public data : DialogDataCliente){ }

  ngOnInit(): void {
    this.cliente.push(this.data.cliente);
  }

  editarModalCliente(): void {
    const modalRef = this.dialog.open(EditarModalClienteComponent,{
      minWidth: '500px'
    });
    modalRef.afterClosed().subscribe((result : any) => {
      this.listar();
    })
  }

  async editar(){

    this.cliente = await this.httpService.put('cliente', {nomefantasia : this.nomefantasia,razaosocial :this.razaosocial});
    this.listar();
  }

  async listar(){
    this.cliente = await this.httpService.get('cliente');
    this.original = [];
    this.cliente.forEach(element => this.original.push(element))
  }
}
