import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const formData = form.value;

      const footerContent = `
      <p>Nombre: ${formData.name}</p>
      <p>Apellido: ${formData.lastname}</p>
      <p>Correo Electrónico: ${formData.email}</p>
      <p>Teléfono: ${formData.phone}</p>
      <p>Mensaje: ${formData.message}</p>
    `;

    Swal.fire({
      icon: 'success',
      title: 'Formulario creado exitosamente!',
      html: footerContent 
    });
      
    } else {
      Swal.fire({
        icon: "error",
        title: "Por favor, completa todos los campos correctamente.",
      });
    }
  }
}