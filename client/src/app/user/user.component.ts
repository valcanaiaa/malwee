import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
description: any;
mostrar2: any;
mostrar: any;
mostrar3: any;
mostrar4: any;
toggle() {
throw new Error('Method not implemented.');
}
toggle2() {
throw new Error('Method not implemented.');
}
// excluir(arg0: any[]) {
// throw new Error('Method not implemented.');
// }
user : Array<any> = [];
original : Array<any>  = [];
fantasyName : string = '';
filterTerm : string = '';
id: any;



  constructor(private router : Router, private httpService : HttpService) { }

  ngOnInit(): void {
    this.listar();
  }
  toggle3 () {
    this.mostrar = !this.mostrar;
  }
  toggle4 () {
    this.mostrar2 = !this.mostrar2;
  }
   async adicionar(){
     console.log(this.fantasyName);
     this.user= await this.httpService.post('user', {fantasyName : this.fantasyName});
     console.log(this.user);
  }

  async listar(){
    this.user = await this.httpService.get('user');
    this.original = [];
    this.user.forEach(element => this.original.push(element))
  }

  async editar(){
    await this.httpService.put('user/',  {id : this.id, description : this.description});
    this.listar();
  }

  async excluir(gruser : any){
    await this.httpService.patch('user/' + this.id,{});
    this.listar();
}
}
