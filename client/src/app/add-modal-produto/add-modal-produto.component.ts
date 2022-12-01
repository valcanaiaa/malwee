import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http.service';
import { EditarModalProdutoComponent } from '../editar-modal-produto/editar-modal-produto.component';

@Component({
  selector: 'app-add-modal-produto',
  templateUrl: './add-modal-produto.component.html',
  styleUrls: ['./add-modal-produto.component.scss']
})
export class AddModalProdutoComponent implements OnInit {

  description : string='';
  public produto :Array<any> = [];
preco: number = 0;
FkGrupo: number = 0 ;
FkSubGrupo: number = 0 ;
FkColecao: number = 0 ;
  original: Array<any> = [];
  filterTerm : string = '';
  id: any;

  constructor(private router : Router, private httpService : HttpService,public  dialog : MatDialog) { }

  ngOnInit(): void {
    this.listar();
  }

  async adicionar(){
    console.log(this.description);
    this.produto = await this.httpService.post('produto', {description : this.description,
       preco : this.preco, FkGrupo : this.FkGrupo, FkSubGrupo : this.FkSubGrupo,FkColecao : this.FkColecao});
    console.log(this.produto);
  }

  filtrar() {
    this.produto = this.original.filter((element : any) => {
      return String(element.description).toUpperCase().includes(this.filterTerm.toUpperCase());
    })
  }

  adicionarModalProuto(): void {
    const modalRef = this.dialog.open(AddModalProdutoComponent,{
      minWidth: '500px'
    });
    modalRef.afterClosed().subscribe((result : any) => {
      this.listar();
    })
  }

  excluirModalProuto(): void {
    const modalRef = this.dialog.open(EditarModalProdutoComponent,{
      minWidth: '500px'
    });
    modalRef.afterClosed().subscribe((result : any) => {
      this.listar();
    })
  }

  async listar(){
    this.produto = await this.httpService.get('produto');
    this.original = [];
    this.produto.forEach(element => this.original.push(element))
  }

  async editar(){
    await this.httpService.put('produto/',  {id : this.id, description : this.description});
    this.listar();
  }

  async excluir(produto : any){
    await this.httpService.patch('produto/' + produto.id,{});
    this.listar();
    }
}
