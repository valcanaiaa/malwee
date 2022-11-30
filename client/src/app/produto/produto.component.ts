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
  produto : Array<any> = [];
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

editarModalProduto(produto : any) : void {
  debugger
  const modalRef = this.dialog.open(EditarModalProdutoComponent,{
    minWidth: '500px',
    data: produto

  });
  modalRef.afterClosed().subscribe(result => {
    this.listar();
  })
}

async listar(){
  this.produto = await this.httpService.get('produto');
  this.original = [];
  this.produto.forEach(element => this.original.push(element))
}

async adicionar(){
  console.log(this.description);
  this.produto = await this.httpService.post('produto', {description : this.description});
  console.log(this.produto);
}

async excluir(produto : any){
  await this.httpService.patch('produto/' + produto.idproduto,{});
  this.listar();
}

filtrar(){
  this.produto = this.original.filter((element : any) => {
    return String(element.description).toUpperCase().includes(this.filterTerm.toUpperCase());
  })
}
}


