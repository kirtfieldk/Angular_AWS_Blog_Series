import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/User.model';
import { LoginServiceService } from 'src/app/service/Login-service/login-service.service';
import { UserServiceService } from 'src/app/service/User-service/user-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit, OnDestroy {
  token: string;
  user: User;
  subscription: Subscription;
  constructor(
    private loginService: LoginServiceService,
    private userService: UserServiceService,
    private router: Router,
  ) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  // Unscubscribe from our subscription
  ngOnInit(): void {
    this.loginService.token.subscribe(
      (el: string) => {
        this.token = el;
        this.userService.fetchUser(el);
      },
      null,
      () => this.token.length > 1,
    );
    this.subscription = this.userService.user.subscribe(
      (el: User) => {
        this.user = el;
        this.router.navigate(['/profile', el._id]);
      },
    );
  }
}
