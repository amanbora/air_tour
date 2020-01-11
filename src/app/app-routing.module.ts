import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { OurServiceComponent } from './pages/our-service/our-service.component';
import { FlashScreenComponent } from './common/flash-screen/flash-screen.component';
import { OurCenterComponent } from './pages/our-center/our-center.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ServiceBoxComponent } from './common/service-box/service-box.component';
import { AddNewJourneyComponent } from './pages/add-new-journey/add-new-journey.component';

//import { OurServiceComponent } from './pages/our-service/our-service.component';

const routes: Routes = [
  { path : '', component: FlashScreenComponent },
  { path : 'home', component: HomeComponent },
  { path : 'userProfile', component: UserProfileComponent },
  { path : 'editProfile', component: EditProfileComponent },
  { path : 'addJourney', component: AddNewJourneyComponent },

  { path : 'register', component: RegistrationComponent},
  { path : 'profile', component: ProfileComponent},
  { path : 'service', component: OurServiceComponent},
  { path : 'center', component: OurCenterComponent},
  { path : 'service-box', component: ServiceBoxComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =
          [ HomeComponent, UserProfileComponent,
            RegistrationComponent, OurServiceComponent,
            FlashScreenComponent, OurCenterComponent,
            EditProfileComponent, AddNewJourneyComponent];
