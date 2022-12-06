import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http.service';
import { AddModalClienteComponent } from '../add-modal-cliente/add-modal-cliente.component';
import { EditarModalClienteComponent } from '../editar-modal-cliente/editar-modal-cliente.component';
import { EditarModalProdutoComponent } from '../editar-modal-produto/editar-modal-produto.component';

const moment = require('moment');

export interface DialogDataCliente {
  cliente : Array<any>;
  id : number;
  razaosocial:string;
  nomefantasia:string;
}

@Component({
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
  selector: 'cliente.component.modal',
})


export class ClienteComponent implements OnInit  {

  mostrar: Boolean = false
  mostrar2: Boolean = false
  mostrar3: Boolean = false

  cliente : Array<any> = []
  original : Array<any>  = [];
  fantasyName : string = '';
  filterTerm : string = '';
  id: any;
  description: any;


  constructor(private router : Router, private httpService : HttpService, public dialog : MatDialog) { }

  ngOnInit(): void {
    this.listar();
  }

filtrar() {
  this.cliente = this.original.filter((element : any) => {
    return String(element.description).toUpperCase().includes(this.filterTerm.toUpperCase());
  })
}

adicionarModalCliente(): void {
  const modalRef = this.dialog.open(AddModalClienteComponent,{
    minWidth: '500px'
  });
  modalRef.afterClosed().subscribe((result : any) => {
    this.listar();
  })
}
editarModalCliente(cliente : any, id :any, razaodocial: any, nomrfantasia: any ) : void {
  const modalRef = this.dialog.open(EditarModalClienteComponent,{
    minWidth: '500px',
data: {cliente: cliente,id: id, razaodocial: razaodocial,nomefantasia:nomrfantasia}
  });
  modalRef.afterClosed().subscribe(result => {
    this.listar();
  })
}

 async adicionar(){
   console.log(this.fantasyName);
   this.cliente = await this.httpService.post('cliente', {fantasyName : this.fantasyName});
   console.log(this.cliente);
}

async listar(){
  this.cliente = await this.httpService.get('cliente');
  this.original = [];
  this.cliente.forEach(element => this.original.push(element))

  this.cliente.forEach(element => {

    console.log(element.createdAt);
    element.clientedesde_str = moment(element.createdAt).format('DD/MM/YYYY');
  })
}

async editar(){
  await this.httpService.put('cliente/',  {id : this.id, description : this.description});
  this.listar();
}

async excluir(cliente : any){
  await this.httpService.patch('cliente/' + cliente.id,{});
  this.listar();
  }
    }


