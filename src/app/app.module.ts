import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import {AngularFireModule} from '@angular/fire/compat';
import { firebaseConfig } from './config/firebase-config';
import { PasswordStyleDirective } from './password-style.directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { LoginComponent } from './component/login/login.component';
import { SigninComponent } from './component/signin/signin.component';
import { UserdashboardComponent } from './component/userdashboard/userdashboard.component';
import { StaffloginComponent } from './component/stafflogin/stafflogin.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { PracticeComponent } from './component/practice/practice.component';
import { AdmindashboardComponent } from './component/admindashboard/admindashboard.component';
import { FirebasecrudopComponent } from './component/firebasecrudop/firebasecrudop.component';
import { AddnewstaffComponent } from './component/addnewstaff/addnewstaff.component';
import { ADelivaryComponent } from './component/a-delivary/a-delivary.component';
import { AAnalysisComponent } from './component/a-analysis/a-analysis.component';
import { APanalysisComponent } from './component/a-panalysis/a-panalysis.component';
import { StaffdashboardComponent } from './component/staffdashboard/staffdashboard.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { SAnalysisComponent } from './component/s-analysis/s-analysis.component';
import { OauthComponent } from './component/oauth/oauth.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    SigninComponent,
    UserdashboardComponent,
    PasswordStyleDirective,
    StaffloginComponent,
    AdminloginComponent,
    PracticeComponent,
    AdmindashboardComponent,
    FirebasecrudopComponent,
    AddnewstaffComponent,
    ADelivaryComponent,
    AAnalysisComponent,
    APanalysisComponent,
    StaffdashboardComponent,
    AddproductComponent,
    SAnalysisComponent,
    OauthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig.firebase),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  

})
export class AppModule { }
