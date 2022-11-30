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
  clientedesde : string = '';
  
  constructor(private httpService : HttpService) { }

  ngOnInit(): void {
  }

  async adicionar(){
    this.cliente = await this.httpService.post('cliente', {});
    console.log(this.cliente);
  }


}
