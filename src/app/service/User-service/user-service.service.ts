import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User.model';
import { LoginServiceService } from '../Login-service/login-service.service';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  user: Observable<User>;
  constructor(
    private httpClient: HttpClient,
    private loginUserService: LoginServiceService,
  ) {}

  fetchUser(userToken: String): Observable<User> {
    let headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${userToken}`,
    );
    return this.httpClient.get<User>(
      'http://localhost:5000/v1/auth/user',
      { headers },
    );
  }
}
