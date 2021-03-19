import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AuthGaurd } from './util/AuthRoute.gaurd';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomePageComponent },
  {
    path: 'profile/:profileId',
    component: ProfileComponent,
    canActivate: [AuthGaurd],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
