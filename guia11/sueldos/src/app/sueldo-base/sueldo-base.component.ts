import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-sueldo-base',
  templateUrl: './sueldo-base.component.html',
  styleUrls: ['./sueldo-base.component.css']
})
export class SueldoBaseComponent implements OnInit {
  registro = [];
  empleado: any;
  nombre: string;
  sueldo: number;
  isss: number;
  renta: number;
  afp: number;
  sueldo_neto: number;
  contador: number;
  constructor() { }

  ngOnInit() {
    this.nombre = '';
    this.sueldo = 0;
    this.isss = 0;
    this.renta = 0;
    this.afp = 0;
    this.sueldo_neto = 0;
    this.contador = 0;
  }

  ingresar() {
    if(this.sueldo > 0){
    this.sueldo_neto = this.sueldo;
    this.isss = this.sueldo * 0.073;
    this.renta = this.sueldo * 0.11;
    this.afp = this.sueldo * 0.051;
    this.sueldo_neto = this.sueldo_neto - this.isss - this.renta - this.afp;
      this.empleado = { "nombre": this.nombre, "sueldo": this.sueldo, "isss": this.isss, "renta": this.renta, "afp": this.afp, "sueldo_neto": this.sueldo_neto };
    this.registro.push(this.empleado);
    this.contador++;
    }
  } 
}
