import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  LoginCreds,
  UserLoginResponse,
} from 'src/app/models/User.model';
import { UserServiceService } from '../User-service/user-service.service';

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
        this.token.emit(el.token);
      });
  }
}
