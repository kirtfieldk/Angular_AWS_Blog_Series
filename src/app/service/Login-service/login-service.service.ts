import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  LoginCreds,
  UserLoginResponse,
} from 'src/app/models/User.model';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  constructor(private httpClient: HttpClient) {}
  //Login the user will return a token
  login(data: LoginCreds): Observable<UserLoginResponse> {
    return this.httpClient.post<UserLoginResponse>(
      'http://localhost:5000/v1/auth/login',
      data,
    );
  }
}
