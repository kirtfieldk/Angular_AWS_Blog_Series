import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './service/User-service/user-service.service';
import { AUTHORIZATION } from './util/keywords';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  /* When we render the application, if there is a user in localStorage we will login the user */
  title = 'BC-CLIENT';
  constructor(private userService: UserServiceService) {}
  ngOnInit() {
    this.userService.fetchUser();
  }
}
