import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Response } from '@angular/http';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises:any[] = [];

  constructor(private _httpServices:HttpService) {
  }

  ngOnInit() {
  }

  getPaises(){
     this._httpServices.getTodosLosPaises()
     .subscribe(data=>{
        for(let i in data){
          this.paises.push(i);
        } 
     console.log(data['_body']);
      });
     
  }
  /*
  getPais(pais:string){
    this._httpServices.getPais(pais)
    .subscribe(data=>{
      for (let i in data){
        this.paises.push(i);
      }
    })
    console.log(this.paises);

  }
  */
}
