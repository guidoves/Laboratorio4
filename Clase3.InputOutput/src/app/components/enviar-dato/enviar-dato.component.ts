import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-enviar-dato',
  templateUrl: './enviar-dato.component.html',
  styleUrls: ['./enviar-dato.component.css']
})
export class EnviarDatoComponent implements OnInit {

  @Output() enviarDato: EventEmitter<any> = new EventEmitter();
  nombre:string;

  constructor() { }

  ngOnInit() {
  }

  enviar(){
    //alert("Hola EnviarDatos");
    this.enviarDato.emit(this.nombre);
  }

}
