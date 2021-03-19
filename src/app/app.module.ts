import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ListCampsComponent } from './component/list-camps/list-camps.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { LoginServiceService } from './service/Login-service/login-service.service';
import { BcServiceService } from './service/Bc-service/bc-service.service';
import { UserServiceService } from './service/User-service/user-service.service';
import { RegisterServiceService } from './service/Register-service/register-service.service';
import { ProfileComponent } from './component/profile/profile.component';
import { AuthGaurd } from './util/AuthRoute.gaurd';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListCampsComponent,
    HomePageComponent,
    LoginFormComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [
    LoginServiceService,
    BcServiceService,
    UserServiceService,
    RegisterServiceService,
    AuthGaurd,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
