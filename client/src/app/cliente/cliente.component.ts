import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';
import { AddModalClienteComponent } from '../add-modal-cliente/add-modal-cliente.component';
import { ClienteModalComponent } from '../cliente-modal/cliente-modal.component';
import { EditarModalClienteComponent } from '../editar-modal-cliente/editar-modal-cliente.component';

const moment = require('moment');

@Component({
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
  selector: 'cliente.component.modal',
})


export class ClienteComponent implements OnInit  {
  original   : Array<any> = [];
  filterTerm : string = '';
  cliente : Array<any> = []

  constructor(private httpService : HttpService, public dialog : MatDialog) { }

  ngOnInit(): void {
    this.listar();
  }

  filtrar() {
    this.cliente = this.original.filter((element : any) => {
      return String(element.description).toUpperCase().includes(this.filterTerm.toUpperCase());
    })
  }

  adicionarModalCliente(): void {
    const modalRef = this.dialog.open(ClienteModalComponent, {
      minWidth : '50rem',
    });

    modalRef.afterClosed().subscribe(result => {
      this.listar();
    })
  }

  editarModalCliente(cliente : any) : void {
    const modalRef = this.dialog.open(ClienteModalComponent, {
      minWidth : '50rem',
      data : {id : cliente.id}
    });

    modalRef.afterClosed().subscribe(result => {
      this.listar();
    })
  }

  async listar(){
    this.cliente = await this.httpService.get('cliente');
    this.original = [];
    this.cliente.forEach(element => this.original.push(element))

    this.cliente.forEach(element => {
      console.log(element);
      element.clientedesde_str = moment(element.clientedesde).format('DD/MM/YYYY');
    })
  }

  async excluir(cliente : any){
    await this.httpService.patch('cliente/' + cliente.id,{});
    this.listar();
  }
}


