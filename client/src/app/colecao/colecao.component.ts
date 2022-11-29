import { ListKeyManager } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http.service';
import { AddModalColecaoComponent } from '../add-modal-colecao/add-modal-colecao.component';

@Component({
  selector: 'app-colecao',
  templateUrl: './colecao.component.html',
  styleUrls: ['./colecao.component.scss']
})
export class ColecaoComponent implements OnInit {
toggle2() {
throw new Error('Method not implemented.');
}
  id: any;

adicionarModalColecao() {
const mpdalRef = this.dialog.open(AddModalColecaoComponent,{
  minWidth: '500px'
});
  mpdalRef.afterClosed().subscribe(result => {
  this.listar();
})
}

  colecao : Array<any> = [];
  description : string='';
  original : Array<any>=[];
  filterTerm : string='';

  constructor(private router : Router, private httpService : HttpService,public dialog : MatDialog) { }

  ngOnInit(): void {
    this.listar();
  }
  async listar(){
    this.colecao = await this.httpService.get('colecao');
    this.original = [];
    this.colecao.forEach(element => this.original.push(element))
  }

  async adicionar(){
    console.log(this.description);
    this.colecao = await this.httpService.post('colecao', {description : this.description});
    console.log(this.colecao);
  }

  async editar(){
    await this.httpService.put('colecao/',  {id : this.id, description : this.description});
    this.listar();
  }

  async excluir(colecao : any){
    await this.httpService.patch('colecao/' + colecao.id,{});
    this.listar();
}

  filtrar(){
    this.colecao = this.original.filter((element : any) => {
      return String(element.description).toUpperCase().includes(this.filterTerm.toUpperCase());
    })
  }
}
















