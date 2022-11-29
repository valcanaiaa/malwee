import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  mostrar: Boolean = false
  mostrar2: Boolean = false
  mostrar3: Boolean = false

  cliente : Array<any> = []
  original : Array<any>  = [];
  fantasyName : string = '';
  filterTerm : string = '';
  id: any;
  description: any;

  constructor(private router : Router, private httpService : HttpService) { }

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
 async adicionar(){
   console.log(this.fantasyName);
   this.cliente= await this.httpService.post('cliente', {fantasyName : this.fantasyName});
   console.log(this.cliente);
}

async listar(){
  this.cliente = await this.httpService.get('cliente');
  this.original = [];
  this.cliente.forEach(element => this.original.push(element))
}

async editar(){
  await this.httpService.put('cliente/',  {id : this.id, description : this.description});
  this.listar();
}

async excluir(cliente : any){
  await this.httpService.patch('cliente/' + cliente.id,{});
  this.listar();
  }
    }


