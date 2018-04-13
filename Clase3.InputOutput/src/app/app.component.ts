import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombres:string[] = [];

  saludo(dato:string){
    this.nombres.push(dato);
    console.log(this.nombres);
  }
  
}
