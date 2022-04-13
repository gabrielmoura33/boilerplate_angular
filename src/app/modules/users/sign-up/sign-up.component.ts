import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup = new FormGroup({
    cpf: new FormControl(null, [Validators.required]),
    fullname: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, []),
    gender: new FormControl('', []),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, []),
  });
  constructor(private router: Router, private toastrService: ToastrService) {}

  ngOnInit(): void {}

  handleSubmitForm() {
    try {
      if (!this.signUpForm.valid) throw new Error('Formulário inválido');
      const formValue = this.signUpForm.value;
    } catch (error) {
      console.log(error);
      this.toastrService.error(
        'Ocorreu um erro, favor verificar os dados informados.',
        'Erro'
      );
    }
  }

  handleSignIn() {
    this.router.navigate(['/']);
  }
}
