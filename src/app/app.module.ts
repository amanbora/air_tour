import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Component} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormBuilder, Form, NgForm} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule, MatMenu, MatButtonModule, MatTabsModule} from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';

import { OurServiceComponent } from './pages/our-service/our-service.component';
import { FlashScreenComponent } from './common/flash-screen/flash-screen.component';
import { OurCenterComponent } from './pages/our-center/our-center.component';
import { MyServicesComponent } from './pages/my-services/my-services.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ServiceBoxComponent } from './common/service-box/service-box.component';
import { AddNewJourneyComponent } from './pages/add-new-journey/add-new-journey.component';

import { AuthGuardService} from '../app/services/auth-guard.service';
import { LoginComponent } from './pages/login/login.component';
import { TrackerComponent } from './common/tracker/tracker.component';
import { AgmCoreModule } from '@agm/core';
import { LuggageServiceComponent } from './pages/allservices/luggage-service/luggage-service.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TaxiServiceComponent } from './pages/allservices/taxi-service/taxi-service.component';
import { ChildServiceComponent } from './pages/allservices/child-service/child-service.component';
import { CheckinServiceComponent } from './pages/allservices/checkin-service/checkin-service.component';
import { ServiceCardComponent } from './common/service-card/service-card.component';
import { FirebaseService } from './services/firebase.service';
import { MachineComponent } from './ml-model/machine/machine.component';
import { SafePipe } from './../app/pipe/safe.pipe';
import { DialogComponent } from './pages/dialog/dialog.component';
import { MatDialogModule } from '@angular/material';
import { CarouselComponent } from './common/carousel/carousel.component';
import { Carousel3dComponent } from './common/carousel3d/carousel3d.component';
import { CouponComponent } from './common/coupon/coupon.component';
import { CabcouponComponent } from './common/cabcoupon/cabcoupon.component';
import { FlightcouponComponent } from './common/flightcoupon/flightcoupon.component';
import { FoodcouponComponent } from './common/foodcoupon/foodcoupon.component';
import { HotelcouponComponent } from './common/hotelcoupon/hotelcoupon.component';
import { OfficialComponent } from './pages/official/official.component';


AngularFireModule.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MyServicesComponent,
    NavbarComponent,
    OurServiceComponent,
    FlashScreenComponent,
    OurCenterComponent,
    UserProfileComponent,
    EditProfileComponent,
    ServiceBoxComponent,
    AddNewJourneyComponent,
    LoginComponent,
    TrackerComponent,
    LuggageServiceComponent,
    TaxiServiceComponent,
    ChildServiceComponent,
    CheckinServiceComponent,
    ServiceCardComponent,
    MachineComponent,
    SafePipe,
    DialogComponent,
    CarouselComponent,
    Carousel3dComponent,
    CabcouponComponent,
    CouponComponent,
    FlightcouponComponent,
    FoodcouponComponent,
    HotelcouponComponent,
    OfficialComponent




  ],

  entryComponents : [DialogComponent],
  imports: [
    // for connecting firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    
    // firebase connected

    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatGridListModule,
    MatSelectModule ,
    NgxMatSelectSearchModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDYzOj_e7CSYYRW36a4K52O1OjR7rvEN9E'
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
   

  ],
  
  
  providers: [AuthGuardService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
