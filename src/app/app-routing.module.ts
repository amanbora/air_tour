import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { OurServiceComponent } from './pages/our-service/our-service.component';
//import { OurServiceComponent } from './pages/our-service/our-service.component';

const routes: Routes = [
  { path : '', component: HomeComponent },
  { path : 'home', component: HomeComponent },
  { path : 'profile', component: ProfileComponent },
  { path : 'register', component: RegistrationComponent},
  { path : 'user-profile', component: UserProfileComponent},
  { path : 'service', component: OurServiceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, ProfileComponent, RegistrationComponent,OurServiceComponent];
