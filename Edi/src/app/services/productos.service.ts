import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen?: string;
  descripcion?: string;
  stock: number;
  categoria?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'http://localhost:5036/api/Productos';

  constructor(private http: HttpClient) { 
    console.log('ProductosService inicializado con URL:', this.apiUrl);
  }

  // Obtener todos los productos
  getProductos(): Observable<Producto[]> {
    console.log('Haciendo petición GET a:', this.apiUrl);
    
    // Headers para evitar caché
    const headers = new HttpHeaders({
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    
    return this.http.get<Producto[]>(this.apiUrl, { headers });
  }

  // Obtener un producto por ID
  obtenerProductoPorId(id: number): Observable<Producto> {
    console.log('Haciendo petición GET a:', `${this.apiUrl}/${id}`);
    
    // Headers para evitar caché
    const headers = new HttpHeaders({
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    
    return this.http.get<Producto>(`${this.apiUrl}/${id}`, { headers });
  }
}
