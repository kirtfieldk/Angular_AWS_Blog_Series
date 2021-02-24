import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  LoginCreds,
  RegisterUserInfo,
} from 'src/app/models/User.model';
import { LoginServiceService } from 'src/app/service/Login-service/login-service.service';
import { RegisterServiceService } from 'src/app/service/Register-service/register-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  @ViewChild('f') userCredForm: NgForm;

  public register: boolean;
  public loginCreds: LoginCreds = { email: '', password: '' };
  constructor(
    private loginService: LoginServiceService,
    private registerService: RegisterServiceService,
  ) {}

  ngOnInit(): void {
    this.register = true;
  }
  switchRegister(): void {
    this.register = !this.register;
  }
  submit(): void {
    console.log(this.userCredForm);
    if (this.register)
      this.registerService.registerUser(this.userCredForm.value);
    else this.loginService.login(this.userCredForm.value);
  }
}
