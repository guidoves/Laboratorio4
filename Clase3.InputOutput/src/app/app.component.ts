import { Component } from '@angular/core';
import { Persona } from './clases/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  personas:Persona[] = new Array();

  saludo(dato:Persona){
    this.personas.push(dato);
    console.log(this.personas);
  }
  
}
