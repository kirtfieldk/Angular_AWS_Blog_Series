import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CurrentUserResponse, User } from 'src/app/models/User.model';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  user = new Subject<User>();
  currentUser: User;
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
      .subscribe(
        (el: CurrentUserResponse) => {
          this.currentUser = el.data;
          this.user.next(el.data);
        },
        (err) => console.log(err),
      );
  }
}
