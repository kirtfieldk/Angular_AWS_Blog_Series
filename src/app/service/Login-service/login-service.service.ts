import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import {
  LoginCreds,
  UserLoginResponse,
} from 'src/app/models/User.model';
import { AUTHORIZATION } from 'src/app/util/keywords';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  token = new EventEmitter<String>();

  constructor(private httpClient: HttpClient) {}
  //Login the user will return a token
  login(data: LoginCreds): void {
    this.httpClient
      .post<UserLoginResponse>(
        'http://localhost:5000/v1/auth/login',
        data,
      )
      .subscribe((el: UserLoginResponse) => {
        localStorage.setItem(AUTHORIZATION, el.token);
        this.token.emit(el.token);
      });
  }
}
