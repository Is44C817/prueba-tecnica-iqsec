import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  ngOnInit(): void {
  }

  cardTypes = ['Mastercard', 'Visa', 'Amex', 'Discover'];
  debitCardForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.debitCardForm = this.fb.group({
      cardType: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      cardHolder: ['', Validators.required],
      expirationDate: ['', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}$/)]],
      postalCode: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]]
    });
  }

  onSubmit() {
    if (this.debitCardForm.valid) {
      const formData = this.debitCardForm.value;

      const footerContent = `
      <p>Tipo de tarjeta: ${formData.cardType}</p>
      <p>Número tarjeta: ${formData.cardNumber}</p>
      <p>Titular tarjeta: ${formData.cardHolder}</p>
      <p>Fecha expiración: ${formData.expirationDate}</p>
      <p>Código postal: ${formData.postalCode}</p>
    `;

    Swal.fire({
      icon: 'success',
      title: 'Formulario creado exitosamente!',
      html: footerContent,
      confirmButtonText: 'OK'
    }).then(() => {
      this.debitCardForm.reset();
    });
    }
  }
}