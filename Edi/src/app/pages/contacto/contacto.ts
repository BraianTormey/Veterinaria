import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule, CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {
  formData = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  };

  enviando = false;

  enviarMensaje() {
    if (this.enviando) return;
    
    this.enviando = true;
    
    // Simular envío del formulario
    setTimeout(() => {
      console.log('Datos del formulario:', this.formData);
      
      // Aquí normalmente se enviaría a un servicio/API
      alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
      
      // Limpiar formulario
      this.formData = {
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
      };
      
      this.enviando = false;
    }, 2000);
  }
}
