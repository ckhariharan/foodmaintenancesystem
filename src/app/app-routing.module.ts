import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { LoginComponent } from './component/login/login.component';
import { SigninComponent } from './component/signin/signin.component';
import { UserdashboardComponent } from './component/userdashboard/userdashboard.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { StaffloginComponent } from './component/stafflogin/stafflogin.component';
import { PracticeComponent } from './component/practice/practice.component';
import { AdmindashboardComponent } from './component/admindashboard/admindashboard.component';
import { FirebasecrudopComponent } from './component/firebasecrudop/firebasecrudop.component';
import { AddnewstaffComponent } from './component/addnewstaff/addnewstaff.component';
import { AAnalysisComponent } from './component/a-analysis/a-analysis.component';
import { ADelivaryComponent } from './component/a-delivary/a-delivary.component';
import { APanalysisComponent } from './component/a-panalysis/a-panalysis.component';
import { StaffdashboardComponent } from './component/staffdashboard/staffdashboard.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { SAnalysisComponent } from './component/s-analysis/s-analysis.component';
import { OauthComponent } from './component/oauth/oauth.component';


const routes: Routes = [
{path:'',component:MainComponent},
{path:'login',component:LoginComponent},
{path:'signin',component:SigninComponent},
{path:'userdashboard',component:UserdashboardComponent},
{path:'adminlogin',component:AdminloginComponent},
{path:'stafflogin',component:StaffloginComponent},
{path:'practice',component:PracticeComponent},
{path:'admindashboard',component:AdmindashboardComponent},
{path:'addnewstaff',component:AddnewstaffComponent},
{path:'adminanalysis',component:AAnalysisComponent},
{path:'admindelivary',component:ADelivaryComponent},
{path:'adminproductanalysis',component:APanalysisComponent},
{path:'staffdashboard',component:StaffdashboardComponent},
{path:'firebasecrudop',component:FirebasecrudopComponent},
{path:'addproduct',component:AddproductComponent},
{path:'staffanalysis',component:SAnalysisComponent},
{path:'firebase',component:FirebasecrudopComponent},
{path:'oauth',component:OauthComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
