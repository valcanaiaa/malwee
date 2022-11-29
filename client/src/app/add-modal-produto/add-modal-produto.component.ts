import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service';

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

  constructor(private httpService : HttpService) { }

  ngOnInit(): void {
  }

  async adicionar(){
    console.log(this.description);
    this.produto = await this.httpService.post('produto', {description : this.description,
       preco : this.preco, FkGrupo : this.FkGrupo, FkSubGrupo : this.FkSubGrupo,FkColecao : this.FkColecao});
    console.log(this.produto);
  }
}
