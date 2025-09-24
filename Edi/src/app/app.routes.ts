import { Routes } from '@angular/router';
// Importo los componentes de las páginas principales
import { Inicio } from './pages/inicio/inicio';
import { Acercade } from './pages/acercade/acercade';
import { Productos } from './pages/productos/productos';
import { Contacto } from './pages/contacto/contacto';
import { ProductoDetalle } from './pages/producto-detalle/producto-detalle';

// Defino las rutas principales de la aplicación
// Cada ruta apunta a un componente correspondiente
export const routes: Routes = [
  {
    path: '', // Ruta raíz, página de inicio
    component: Inicio // Página de inicio
  },
  {
    path: 'acercade',
    component: Acercade // Página Acerca de
  },
  {
    path: 'productos',
    component: Productos // Página de listado de productos
  },
  {
    path: 'productos/:id',
    component: ProductoDetalle // Página de detalle de producto (usa parámetro id)
  },
  {
    path: 'contacto',
    component: Contacto // Página de contacto
  }
];
// Fin de la configuración de rutas
