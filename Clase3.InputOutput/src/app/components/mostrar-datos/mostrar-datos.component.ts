import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mostrar-datos',
  templateUrl: './mostrar-datos.component.html',
  styleUrls: ['./mostrar-datos.component.css']
})
export class MostrarDatosComponent implements OnInit {

  @Input() dato: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
