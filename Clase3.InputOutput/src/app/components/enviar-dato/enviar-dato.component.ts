import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Persona } from '../../clases/persona';


@Component({
  selector: 'app-enviar-dato',
  templateUrl: './enviar-dato.component.html',
  styleUrls: ['./enviar-dato.component.css']
})
export class EnviarDatoComponent implements OnInit {

  @Output() enviarDato: EventEmitter<any> = new EventEmitter();
  persona:Persona;

  constructor() {
      this.persona = new Persona();
   }

  ngOnInit() {
  }
  
  enviar(){
    //alert("Hola EnviarDatos");
    let enviarPersona:Persona = new Persona(this.persona.nombre,this.persona.apellido,this.persona.edad)
    this.enviarDato.emit(enviarPersona);
  }
  
}
