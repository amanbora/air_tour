import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyServicesComponent } from './pages/my-services/my-services.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { OurServiceComponent } from './pages/our-service/our-service.component';
import { FlashScreenComponent } from './common/flash-screen/flash-screen.component';
import { OurCenterComponent } from './pages/our-center/our-center.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ServiceBoxComponent } from './common/service-box/service-box.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './pages/login/login.component';
import { AddNewJourneyComponent } from './pages/add-new-journey/add-new-journey.component';
import { TrackerComponent } from './common/tracker/tracker.component';
import { LuggageServiceComponent } from './pages/allservices/luggage-service/luggage-service.component';
import { TaxiServiceComponent } from './pages/allservices/taxi-service/taxi-service.component';
import { CheckinServiceComponent } from './pages/allservices/checkin-service/checkin-service.component';
import { ChildServiceComponent } from './pages/allservices/child-service/child-service.component';
import { ServiceCardComponent } from './common/service-card/service-card.component';
import { MachineComponent } from './ml-model/machine/machine.component';
import { Carousel3dComponent } from './common/carousel3d/carousel3d.component';
import { CouponComponent } from './common/coupon/coupon.component';
import { CabcouponComponent } from './common/cabcoupon/cabcoupon.component';
import { FlightcouponComponent } from './common/flightcoupon/flightcoupon.component';
import { FoodcouponComponent } from './common/foodcoupon/foodcoupon.component';
import { HotelcouponComponent } from './common/hotelcoupon/hotelcoupon.component';
import { CarouselComponent } from './common/carousel/carousel.component';
import { OfficialComponent } from './pages/official/official.component';
import { MainOfficialComponent } from './pages/main-official/main-official.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';


// import { OurServiceComponent } from './pages/our-service/our-service.component';

const routes: Routes = [
  { path : '', component: FlashScreenComponent },
  { path : 'home', component: HomeComponent },
  { path : 'user-profile', component: UserProfileComponent, canActivate : [AuthGuardService] },
  { path : 'editProfile', component: EditProfileComponent , canActivate : [AuthGuardService]},
  { path : 'login', component: LoginComponent , canActivate : [AuthGuardService]},
  { path : 'about-us', component: AboutUsComponent },
  { path : 'register', component: RegistrationComponent},
  { path : 'my-services', component: MyServicesComponent },
  { path : 'our-service', component: OurServiceComponent , canActivate : [AuthGuardService]},
  { path : 'center', component: OurCenterComponent , canActivate : [AuthGuardService]},
  { path : 'service-box', component: ServiceBoxComponent , canActivate : [AuthGuardService]},
  { path : 'add-journey', component: AddNewJourneyComponent , canActivate : [AuthGuardService]},
  { path : 'tracker', component: TrackerComponent },
  { path : 'luggage-service', component: LuggageServiceComponent , canActivate : [AuthGuardService]},
  { path : 'taxi-service', component: TaxiServiceComponent , canActivate : [AuthGuardService]},
  { path : 'checkin-service', component: CheckinServiceComponent , canActivate : [AuthGuardService]},
  { path : 'child-service', component: ChildServiceComponent , canActivate : [AuthGuardService]},
  { path : 'service-card', component: ServiceCardComponent , canActivate : [AuthGuardService]},
  { path : 'machine', component: MachineComponent },
  { path : 'carousel', component :CarouselComponent},
  { path : 'carousel3d', component: Carousel3dComponent},
  { path : 'coupon', component: CouponComponent},

  { path : 'cabcoupon', component: CabcouponComponent},
  { path : 'flightcoupon', component: FlightcouponComponent},
  { path : 'foodcoupon', component: FoodcouponComponent}, 
  { path : 'hotelcoupon', component: HotelcouponComponent},
  { path : 'official', component: OfficialComponent},
  { path : 'main-official', component: MainOfficialComponent},



  



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
            EditProfileComponent, ChildServiceComponent,
            CheckinServiceComponent, LuggageServiceComponent, CarouselComponent, Carousel3dComponent, CabcouponComponent,
            FlightcouponComponent, FoodcouponComponent, HotelcouponComponent, MachineComponent,OfficialComponent,MainOfficialComponent ];
