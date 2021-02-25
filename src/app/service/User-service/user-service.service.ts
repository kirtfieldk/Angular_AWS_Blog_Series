import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CurrentUserResponse, User } from 'src/app/models/User.model';
import { LoginServiceService } from '../Login-service/login-service.service';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  user = new EventEmitter<User>();
  constructor(private httpClient: HttpClient) {}

  fetchUser(userToken: String): void {
    let headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${userToken}`,
    );
    this.httpClient
      .get<CurrentUserResponse>(
        'http://localhost:5000/v1/auth/user',
        { headers },
      )
      .subscribe((el: CurrentUserResponse) => {
        this.user.emit(el.data);
      });
  }
}
