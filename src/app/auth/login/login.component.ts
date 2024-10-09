import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  router = inject(Router)
  fb = inject(FormBuilder)
  form = this.fb.group({
    user: ['', Validators.required],
    password: ['', Validators.required],
  })
  GuardarCambios() {
    
    console.log(this.form.value)
    let timerInterval:any;
    Swal.fire({
      title: "Auto close alert!",
      html: "I will close in <b></b> milliseconds.",
      timer: 500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup()?.querySelector("b");
        timerInterval = setInterval(() => {
          if(timer)
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (this.form.value.user=='admin' && this.form.value.password=='admin') {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Accediendo al sistema.",
          showConfirmButton: false,
          timer: 1500
        }).then((data)=>{
          this.router.navigate(['/admin/dashboard'])
        });
      }
      else{
        Swal.fire({
          icon: "error",
          title: "No permitido",
          text: "Usuario y/o contraseña incorrecta!",
        });
      }
    });
    
  }
}
