import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http.service';
import { AddModalGrupoComponent } from '../add-modal-grupo/add-modal-grupo.component';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  mostrar : Boolean = false
  mostrar2 : Boolean = false
  grupos : Array<any> = [];
  original : Array<any> = [];
  description : string='';
  filterTerm : string = '';
id: any;
name: any;
  mostrar3: boolean = false;

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

  adicionarModalGrupo(): void {
      const modalRef = this.dialog.open(AddModalGrupoComponent,{
        minWidth: '500px'
      });
      modalRef.afterClosed().subscribe(result => {
        this.listar();
      })
  }

  async listar(){
    this.grupos = await this.httpService.get('grupo');
    this.original = [];
    this.grupos.forEach(element => this.original.push(element))
  }

  async adicionar(){
    console.log(this.description);
    this.grupos = await this.httpService.post('grupo', {description : this.description});
    console.log(this.grupos);
  }

  async editar(){
    await this.httpService.put('grupo/',  {id : this.id, description : this.description});
    this.listar();
  }

  async excluir(grupo : any){
    await this.httpService.patch('grupo/' + grupo.id,{});
    this.listar();
}

  filtrar(){
    this.grupos = this.original.filter((element : any) => {
      return String(element.description).toUpperCase().includes(this.filterTerm.toUpperCase());
    })
  }
}
