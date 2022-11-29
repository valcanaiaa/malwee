import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-modalgrupo',
  templateUrl: './modalgrupo.component.html',
  styleUrls: ['./modalgrupo.component.scss']
})
export class ModalGrupoComponent implements OnInit {

salvar() {
throw new Error('Method not implemented.');
}

mostrar : Boolean = false
grupos : Array<any> = [];
  original : Array<any> = [];
  name : string='';
  filterTerm : string = '';
  description: any;

  constructor(private router : Router, private httpService : HttpService) {}

  ngOnInit(): void {

  }

  toggle () {
    this.mostrar = !this.mostrar;

  }
}
