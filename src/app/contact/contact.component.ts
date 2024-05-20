import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  errores = {
    name: false,
    email: false,
    message: false
  };

  onSubmit() {
    this.errores.name = this.formData.name.trim().length === 0;
    this.errores.email = !this.formData.email.includes('@') || !this.formData.email.includes('.');
    this.errores.message = this.formData.message.trim().length < 10;

    const hayErrores = Object.values(this.errores).some(error => error);
    if (hayErrores) {
      alert('El formulario tiene errores. Por favor, revisa los campos.');
    } else {
      alert('El formulario se ha enviado correctamente.');
      console.log(this.formData);
    }
  }
}
