import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Importo RouterModule para habilitar routerLink en la plantilla principal
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule], // Habilito routerLink y router-outlet en la plantilla
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Edi');
}
