import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  RegisterUserInfo,
  UserLoginResponse,
} from 'src/app/models/User.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterServiceService {
  responseData: Observable<UserLoginResponse>;
  constructor(private httpClient: HttpClient) {}

  //register user
  registerUser(
    data: RegisterUserInfo,
  ): Observable<UserLoginResponse> {
    this.responseData = this.httpClient.post<UserLoginResponse>(
      'http://localhost:5000/v1/auth/register',
      data,
    );
    return this.responseData;
  }

  getUserToken(): Observable<UserLoginResponse> {
    return this.responseData;
  }
}
