import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-excluirmodalproduto',
  templateUrl: './excluirmodalproduto.component.html',
  styleUrls: ['./excluirmodalproduto.component.scss']
})
export class ExcluirmodalprodutoComponent implements OnInit {
id: any;
  produto: any;
  original: Array<any> = [];
filterTerm : string = '';
  constructor(private router :  Router, private httpService : HttpService, public dialog : MatDialog) { }

  ngOnInit(): void {
    this.listar();
  }

  async listar(){
    this.produto = await this.httpService.get('produto');
    this.original = [];
    this.produto.forEach((element : any) => this.original.push(element))
  }

  async excluir(produto : any){
    this.produto = await this.httpService.patch('produto/' + produto.idproduto,{});
    this.listar();
    }

    filtrar() {
      this.produto = this.original.filter((element : any) => {
        return String(element.description).toUpperCase().includes(this.filterTerm.toUpperCase());
      })
    }




}
