import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = 'user';
  pass = '1234';

  userInput : string = "";
  passInput : string = "";


  constructor(private _router:Router) { }

  ngOnInit() {
  }

  validar(){
    if(this.userInput == this.usuario && this.passInput == this.pass){
      this._router.navigate(['alumno']);
    }
    else{
      this._router.navigate(['error']);
    }
  }

}
