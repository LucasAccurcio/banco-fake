import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginError = false;

  loginForm = this.formBuilder.group({
    login: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private toastr: ToastrService,
  ) { }

  validarCamposDoFormulario(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched();
      } else if (control instanceof FormGroup) {
        this.validarCamposDoFormulario(control);
      }
    });
  }

  onSubmit(): void {
    this.loginError = false;
    if (this.loginForm.invalid) {
      this.validarCamposDoFormulario(this.loginForm);
      return;
    }
    this.logIn();
  }

  onSuccessLogin() {
    this.router.navigate(['home']);
  }

  onErrorLogin(): void {
    this.loginError = true;
    console.error('Usuário ou senha incorretos.');
  }

  logIn(): void {
    const { login, password } = this.loginForm.value;
    if (login && password) {
      this.loginService.login(login, password)
        .subscribe({
          next: () => this.onSuccessLogin(),
          error: () => this.onErrorLogin(),
        });
    }
    
    console.log('logIn');
    console.log(login + ' ' + password);
  }

  showError(campo: string): boolean | void {
    if (!this.loginForm.get(campo)) {
      return false;
    }
    return this.loginForm.get(campo)?.invalid && this.loginForm.get(campo)?.touched;
  }

  registration(): void {
    this.toastr.warning('Ainda não me implementaram!', 'Hmmm...');
  }
}
