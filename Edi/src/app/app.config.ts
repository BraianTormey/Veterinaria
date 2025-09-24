import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { HttpInterceptorFn } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { tap } from 'rxjs';

// Interceptor para logging
const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('🚀 Petición HTTP:', req.method, req.url);
  return next(req).pipe(
    tap({
      next: (response) => console.log('✅ Respuesta exitosa:', response),
      error: (error) => console.error('❌ Error HTTP:', error)
    })
  );
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(), withInterceptors([loggingInterceptor]))
  ]
};
