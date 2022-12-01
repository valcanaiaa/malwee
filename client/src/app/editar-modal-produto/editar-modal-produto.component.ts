import { InjectFlags } from '@angular/compiler/src/core';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';

export interface DialogDataProdutos {
  produtos: Array<any>;
  idproduto : number;
  FkGrupo:number;
  FkSubGrupo: number;
  FkColecao: number;
}

@Component({
  selector: 'app-editar-modal-produto',
  templateUrl: './editar-modal-produto.component.html',
  styleUrls: ['./editar-modal-produto.component.scss']
})
export class EditarModalProdutoComponent implements OnInit {

  produto :Array<any> = [];
  description : string='';
  preco: number = 0;
  original: Array<any> = [];

  constructor(private httpService : HttpService, @Inject(MAT_DIALOG_DATA) public data : DialogDataProdutos) { }

  ngOnInit(): void {
    this.produto.push(this.data.produtos);

  }

  async editar(){
    this.produto = await this.httpService.put('produto', {idproduto : this.data.idproduto, description : this.description, preco : this.preco});
    this.listar();
  }

  async listar(){
    this.produto = await this.httpService.get('produto');
    this.original = [];
    this.produto.forEach(element => this.original.push(element))
  }
}
