import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-subgroup',
  templateUrl: './subgroup.component.html',
  styleUrls: ['./subgroup.component.scss']
})
export class SubgroupComponent implements OnInit {
  Subgrupos : Array<any> = [];
  original : Array<any> = [];
  description : string='';
  id : number = 0;
  filterTerm : string = '';
  mostrar : Boolean = false
  mostrar2 : Boolean = false
  constructor(private router : Router, private httpService : HttpService) {}

  ngOnInit(): void {
    this.listar();
  }

  toggle () {
    this.mostrar = !this.mostrar;
  }
  toggle2 () {
    this.mostrar2 = !this.mostrar2;
  }
  async listar(){
    this.Subgrupos = await this.httpService.get('subgrupo');

    this.original = [];
    this.Subgrupos.forEach(element => this.original.push(element))
  }

  async adicionar(){
    console.log(this.description);
    this.Subgrupos = await this.httpService.post('subgrupo', {description : this.description});
    console.log(this.Subgrupos);
  }
  async editar(){
    await this.httpService.put('subgrupo', {id : this.id, description : this.description});
    this.listar();
  }

  async excluir(subgrupo : any){
     await this.httpService.patch('subgrupo/' + subgrupo.id,{});
     this.listar();
 }

  filtrar(){
    this.Subgrupos = this.original.filter((element : any) => {
      return String(element.description).toUpperCase().includes(this.filterTerm.toUpperCase());
    })
  }
}













