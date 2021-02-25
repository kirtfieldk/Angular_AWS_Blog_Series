import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { LoginServiceService } from 'src/app/service/Login-service/login-service.service';
import { UserServiceService } from 'src/app/service/User-service/user-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  token: string;
  user: User;
  constructor(
    private loginService: LoginServiceService,
    private userService: UserServiceService,
  ) {}

  ngOnInit(): void {
    this.loginService.token.subscribe(
      (el: string) => {
        this.token = el;
        this.userService.fetchUser(el);
      },
      null,
      () => this.token.length > 1,
    );

    this.userService.user.subscribe((el: User) => {
      this.user = el;
      console.log(this.user);
    });
  }
}
