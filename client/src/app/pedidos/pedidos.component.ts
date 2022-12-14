import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http.service';
import { AddModalPedidosComponent } from '../add-modal-pedidos/add-modal-pedidos.component';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})

export class PedidosComponent implements OnInit {

  pedido: Array<any> = [];
  filterTer : string ='';
  original : Array<any> = [];
  mostrar2 : Boolean = false;
  filterTerm: any;
  produto: any;

  constructor(private router : Router,private httpService : HttpService,public dialog : MatDialog) { }

  ngOnInit(): void {
    this.listar();
  }

  toggle2 () {
    this.mostrar2 = !this.mostrar2;
  }

  async listar(){
    this.pedido = await this.httpService.get('pedido');
    this.original = [];
    this.pedido.forEach(element => this.original.push(element))
  }

  async excluir(pedido : any){
    await this.httpService.patch('pedido/' + pedido.id,{});
    this.listar();
}

  filtrar(){
    this.pedido = this.original.filter((element : any) => {
      return String(element.description).toUpperCase().includes(this.filterTerm.toUpperCase());
    })
  }

  adicionarModalPedido(): void {
    const modalRef = this.dialog.open(AddModalPedidosComponent,{
      minWidth: '500px'
    });
    modalRef.afterClosed().subscribe(result => {
      this.listar();
    })
}

}
