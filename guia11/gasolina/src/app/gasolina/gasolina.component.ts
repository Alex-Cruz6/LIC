import { Component, OnInit } from '@angular/core';
//Agregar las siguientes modulos
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-gasolina',
  templateUrl: './gasolina.component.html',
  styleUrls: ['./gasolina.component.css']
})
export class GasolinaComponent implements OnInit {
  //crear las siguientes variables
  unidades;
  opcionSeleccionado: string;
  galon: number;
  valorGaso: number;
  constructor() { }

  ngOnInit() {
    //inicializar las variables
    this.unidades = ["Regular", "Especial", "Diésel"];
    this.opcionSeleccionado = "Selecciona";
    this.galon = 0.05;
    this.valorGaso = 0;
  }
  //funcion que realiza los calculos
  capturar() {
    switch (this.opcionSeleccionado) {
      case 'Regular':
        this.valorGaso = this.galon * 4.05;
        break;
      case 'Especial':
        this.valorGaso = this.galon * 4.25;
        break;
      case 'Diésel':
        this.valorGaso = this.galon * 3.96;
        break;
    }
  }
}
export class AppComponent {
}
