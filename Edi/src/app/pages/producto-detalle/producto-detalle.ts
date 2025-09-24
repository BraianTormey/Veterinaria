import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductosService, Producto } from '../../services/productos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-producto-detalle',
  imports: [CommonModule],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css'
})
export class ProductoDetalle implements OnInit, OnDestroy {
  producto: Producto | null = null;
  cargando = true;
  error = false;
  errorMensaje = '';
  private routeSubscription: Subscription | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productosService: ProductosService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // Obtener el ID del producto desde la URL
    this.routeSubscription = this.route.params.subscribe(params => {
      const id = +params['id']; // Convertir a número
      if (id && !isNaN(id)) {
        this.cargarProducto(id);
      } else {
        this.error = true;
        this.errorMensaje = 'ID de producto inválido';
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  cargarProducto(id: number) {
    this.cargando = true;
    this.error = false;
    
    this.productosService.obtenerProductoPorId(id).subscribe({
      next: (producto) => {
        this.producto = producto;
        this.cargando = false;
        console.log('Producto cargado:', producto);
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar el producto:', error);
        this.error = true;
        this.errorMensaje = 'No se pudo cargar el producto';
        this.cargando = false;
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

  volverAProductos() {
    this.router.navigate(['/productos']);
  }
}
