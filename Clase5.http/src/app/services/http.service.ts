import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable()
export class HttpService {
  
  private _srvUrl:string = "https://restcountries.eu/rest/v2/";

  constructor(private http: Http) { }

  getTodosLosPaises(){
    let resultado =  this.http.get(this._srvUrl + "all")
    .map(function(res){
      return res;
    });
   console.log(resultado);
  }
}