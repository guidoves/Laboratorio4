import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  
  persona = new Persona();

  ngOnInit() {
    //this.persona = new Persona();
  }

}
