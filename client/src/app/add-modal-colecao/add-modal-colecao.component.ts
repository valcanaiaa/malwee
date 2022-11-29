import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-add-modal-colecao',
  templateUrl: './add-modal-colecao.component.html',
  styleUrls: ['./add-modal-colecao.component.scss']
})
export class AddModalColecaoComponent implements OnInit {
description : string='';
public colecao : Array<any> = [];


  constructor(private httpService : HttpService) { }

  ngOnInit(): void {
  }

    async adicionar(){
    console.log(this.description);
    this.colecao = await this.httpService.post('colecao', {description : this.description});
    console.log(this.colecao);
  }
}
