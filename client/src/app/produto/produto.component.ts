import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http.service';
import { AddModalProdutoComponent } from '../add-modal-produto/add-modal-produto.component';
import { EditarModalProdutoComponent } from '../editar-modal-produto/editar-modal-produto.component';

export interface DialogDataProdutos {
  produtos: Array<any>;
  id:number;
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
  mostrar: boolean = false
  mostrar2: boolean = false
mostrar3: boolean = false
  id: any;
  name: any;

constructor(private router : Router, private httpService : HttpService, public dialog : MatDialog) {}

  ngOnInit(): void {
    this.listar();
  }

  toggle () {
    this.mostrar = !this.mostrar;
  }
  toggle2 () {
    this.mostrar2 = !this.mostrar2;
  }
  toggle3 () {
    this.mostrar3 = !this.mostrar3;
  }

  adicionarModalProduto(): void {
    const modalRef = this.dialog.open(AddModalProdutoComponent,{
      minWidth: '500px'
    });
    modalRef.afterClosed().subscribe(result => {
      this.listar();
    })
}

editarModalProduto(produto : any,Id : any, FkGrupo : any, FkSubGrupo : any, FkColecao : any) : void {
  const modalRef = this.dialog.open(EditarModalProdutoComponent,{
    minWidth: '500px',
    data: {produtos:produto,id : Id, FkGrupo : FkGrupo,FkSubGrupo : FkSubGrupo,FkColecao : FkColecao}


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

async editar(){
  await this.httpService.put('produto/',  {id : this.id, description : this.description});
  this.listar();
}

async excluir(produto : any){
  await this.httpService.patch('produto/' + produto.id,{});
  this.listar();
}

filtrar(){
  this.produto = this.original.filter((element : any) => {
    return String(element.description).toUpperCase().includes(this.filterTerm.toUpperCase());
  })
}
}


