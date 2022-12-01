import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http.service';
import { AddModalProdutoComponent } from '../add-modal-produto/add-modal-produto.component';
import { EditarModalProdutoComponent } from '../editar-modal-produto/editar-modal-produto.component';

export interface DialogDataProdutos {
  produtos: Array<any>;
  idproduto : number;
  descricao: string;
  preco: number;
  FkGrupo:number;
  FkSubGrupo: number;
  FkColecao: number;
}

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})

export class ProdutoComponent implements OnInit {
  produtos : Array<any> = [];
  original : Array<any> = [];
  description : string='';
  filterTerm : string = '';

constructor(private router : Router, private httpService : HttpService, public dialog : MatDialog) {}

  ngOnInit(): void {
    this.listar();
  }

  adicionarModalProduto(): void {
    const modalRef = this.dialog.open(AddModalProdutoComponent,{
      minWidth: '500px'
    });
    modalRef.afterClosed().subscribe(result => {
      this.listar();
    })
}

editarModalProduto(produto : any, idproduto : any, FkGrupo : any, FkSubGrupo : any, FkColecao : any) : void {
  const modalRef = this.dialog.open(EditarModalProdutoComponent,{
    minWidth: '500px',
    data: {produtos: produto, idproduto : idproduto, FkGrupo : FkGrupo, FkSubGrupo : FkSubGrupo, FkColecao : FkColecao}

  });
  modalRef.afterClosed().subscribe(result => {
    this.listar();
  })
}

async listar(){
  this.produtos = await this.httpService.get('produto');
  this.original = [];
  this.produtos.forEach(element => this.original.push(element))
}

async adicionar(){
  console.log(this.description);
  this.produtos = await this.httpService.post('produto', {description : this.description});
  console.log(this.produtos);
}

async excluir(produto : any){
  await this.httpService.patch('produto/' + produto.idproduto,{});
  this.listar();
}

filtrar(){
  this.produtos = this.original.filter((element : any) => {
    return String(element.description).toUpperCase().includes(this.filterTerm.toUpperCase());
  })
}
}


