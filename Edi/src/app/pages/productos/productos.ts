import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductosService, Producto } from '../../services/productos.service';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-productos',
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos implements OnInit {
  productos$: Observable<Producto[]> = new Observable();
  cargando = true;
  error = false;

  constructor(
    private productosService: ProductosService,
    private cdr: ChangeDetectorRef
  ) {
    console.log('Componente Productos inicializado');
  }

  ngOnInit() {
    console.log('ngOnInit ejecutado');
    this.cargarProductos();
  }

  cargarProductos() {
    console.log('Iniciando carga de productos...');
    this.cargando = true;
    this.error = false;
    
    this.productos$ = this.productosService.getProductos().pipe(
      catchError(error => {
        console.error('Error al cargar productos:', error);
        this.error = true;
        this.cargando = false;
        this.cdr.detectChanges();
        return of([]);
      })
    );

    this.productos$.subscribe(productos => {
      if (productos.length > 0) {
        this.cargando = false;
        console.log('Productos cargados desde la API:', productos);
        this.cdr.detectChanges();
      }
    });
  }

  formatearPrecio(precio: number): string {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS'
    }).format(precio);
  }
}
