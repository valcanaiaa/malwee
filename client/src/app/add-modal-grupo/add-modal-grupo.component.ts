import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-add-modal-grupo',
  templateUrl: './add-modal-grupo.component.html',
  styleUrls: ['./add-modal-grupo.component.scss']
})
export class AddModalGrupoComponent implements OnInit {

  description : string='';
  public grupo : Array<any> = [];

  constructor(private httpService : HttpService) { }

  ngOnInit(): void {
  }

  async adicionar(){
    console.log(this.description);
    this.grupo = await this.httpService.post('grupo', {description : this.description});
    console.log(this.grupo);
  }
}
