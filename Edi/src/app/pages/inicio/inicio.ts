import { Component } from '@angular/core';
// Importo RouterModule para habilitar routerLink en el botón de la página de inicio
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [RouterModule], // Habilito routerLink en la plantilla
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {

}
