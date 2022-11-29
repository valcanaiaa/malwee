import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username : string = 'valcanaia';
  password : string = 'isabel2121';
  hide : boolean = true;

  constructor(private router : Router, private httpclient: HttpClient) { }

  ngOnInit(): void {
  }

  login(){
    this.httpclient.post('http://localhost:3016/logon',{username : this.username, password : this.password}).toPromise().then((response : any) =>{
      window.localStorage.setItem('token',response.token);
      this.router.navigateByUrl('');
    })
  }
}
