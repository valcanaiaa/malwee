import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-add-modal-pedidos',
  templateUrl: './add-modal-pedidos.component.html',
  styleUrls: ['./add-modal-pedidos.component.scss']
})
export class AddModalPedidosComponent implements OnInit {

  public pedidos : Array<any> =[];
  Fkcliente : number = 0;
  Fkndereco : number = 0;
  DataEmissao : Date = new Date(2022,1,1);
  DataEntrega : Date = new Date(2022,1,1);
  pedido: any;
  produto: string = '';
  valorUnitario: string = '';
  desconto: string = '';
  acrescimpo: string = '';
  quantidade: number = 0;
Fkendereco: any;
Fkproduto: any;
Produto: any;
valorUnitarioais: any;
Pedido: any;
Quantidade: any;
Desconto: any;
Acrescimo: any;
Total: any;

public pedidos2 : Array<any> =[];

  constructor(private httpService : HttpService) { }

  ngOnInit(): void {
  }

  async adicionar(){
    this.pedidos2.push({"fkCliente" : this.Fkcliente ,"Fkendereco" : this.Fkendereco, "DataEmissao" : this.DataEmissao,
    "DataEntrega" : this.DataEntrega, "total" : this.Total})

    this.pedidos = await this.httpService.post('pedido', {Fkcliente :this.Fkcliente, Fkproduto : this.Fkproduto,
      DataEmissao :this.DataEmissao,DataEntrega :this.DataEntrega, pedidos : this.pedidos2});
    console.log(this.pedidos);
  }
  async adicionarpedido(){
    this.pedido = await this.httpService.post('pedido', {produto : this.produto,valorUnitario : this.valorUnitario,
      pedido : this.pedido, quantidade: this.quantidade,desconto : this.desconto, acrescimo: this.acrescimpo});
    console.log(this.pedidos);
  }
}
