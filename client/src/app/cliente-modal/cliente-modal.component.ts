import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';
import { EnderecoModalComponent } from '../endereco-modal/endereco-modal.component';


/*
  Essa modal, pode abrir em dois modos: Modo de Edição e modo de Inserção
*/
@Component({
  selector: 'app-cliente-modal',
  templateUrl: './cliente-modal.component.html',
  styleUrls: ['./cliente-modal.component.scss']
})
export class ClienteModalComponent implements OnInit {
  public cliente : any;

  constructor(@Inject(MAT_DIALOG_DATA) public data : any,
              private httpService : HttpService,
              public dialogRef: MatDialogRef<ClienteModalComponent>,
              public dialog : MatDialog) { }

  ngOnInit(): void {
    this.reset();
    this.loadCliente();

  }

  private async loadCliente(){
    if (!this.data || !this.data.id || this.data.id <= 0){
      return;
    }

    this.cliente = await this.httpService.get('cliente/' + this.data.id);
  }

  private reset(){
    this.cliente = {
      id           : 0,
      cnpj         : '',
      razaosocial  : '',
      nomefantasia : '',
      clientedesde : '',
      enderecos    : []
    }
  }

  async salvar(){
    const data = {
      cnpj         : this.cliente.cnpj,
      razaosocial  : this.cliente.razaosocial,
      nomefantasia : this.cliente.nomefantasia,
      clientedesde : this.cliente.clientedesde,
      enderecos    : []
    };

    data.clientedesde = '';

    this.cliente.enderecos.forEach((element : any) => {
      const endereco : any = {
        cep          : element.cep,
        pais         : element.pais,
        estado       : element.estado,
        cidade       : element.cidade,
        bairro       : element.bairro,
        rua          : element.rua,
        numero       : element.numero,
        complemento  : element.complemento
      };

      (<Array<any>>data.enderecos).push(endereco)
    });

    if (this.cliente.id > 0){
      await this.httpService.put('cliente/' + this.cliente.id, data);
    }

    if (this.cliente.id <= 0){
      await this.httpService.post('cliente', data);
    }

    this.dialogRef.close();
  }

  cancelar(){
    this.dialogRef.close();
  }

  addEndereco(){
    const modalRef = this.dialog.open(EnderecoModalComponent, {
      minWidth : '50rem',
    });

    modalRef.afterClosed().subscribe(result => {
      this.cliente.enderecos.push(result);
    })
  }

  editEndereco(endereco : any){
    const index = this.cliente.enderecos.indexOf(endereco);

    const modalRef = this.dialog.open(EnderecoModalComponent, {
      minWidth : '50rem',
      data : {index : index ,...endereco}
    });

    modalRef.afterClosed().subscribe(result => {
      if (!result){
        return;
      }

      this.cliente.enderecos[index] = result;
    })
  }

  excluirEndereco(endereco : any){
    const index = this.cliente.enderecos.indexOf(endereco);

    if (index < 0){
      return;
    }

    this.cliente.enderecos.splice(index, 1);
  }

}
