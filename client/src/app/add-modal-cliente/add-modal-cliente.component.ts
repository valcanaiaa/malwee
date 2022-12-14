import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service';
@Component({
  selector: 'app-add-modal-cliente',
  templateUrl: './add-modal-cliente.component.html',
  styleUrls: ['./add-modal-cliente.component.scss']
})
export class AddModalClienteComponent implements OnInit {
  cliente: Array <any> = [];
  nomefantasia : string = '';
  cnpj : string = '';
  razaosocial : string = '';
cep: any;
pais: any;
estado: any;
cidade: any;
bairro: any;
rua: any;
numero: any;
complemento: any;
startDate : Date = new Date(2022,1,1);

  constructor(private httpService : HttpService) { }

  ngOnInit(): void {
  }

  async adicionar(){
    this.cliente = await this.httpService.post('cliente', {nomefantasia : this.nomefantasia,cnpj : this.cnpj,
      razaosocial : this.razaosocial,clientedesde : this.startDate});
    console.log(this.cliente);
  }

  async adicionardocumnto(){
    this.cliente = await this.httpService.post('cliente', {cep : this.cep,pais : this. pais,
      estado : this.estado,cidade : this.cidade, rua : this.rua,
       numero: this.numero,complemento : this.complemento});
    console.log(this.cliente);
  }


}
