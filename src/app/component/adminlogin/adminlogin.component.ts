import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {



  
  adminId: any;
  password: any;

  showErroradminId: boolean = false;
  showErrorpassword: boolean = false;
  showErrorinvalid: boolean=false;
  showError:string='';

  showon:boolean=false;

  constructor(public router: Router,private title:Title) { }


eye(){
   this.showon=!this.showon;

}



  onSubmit() {

    this.validation();
  
  }


  validation(){
    this.showErroradminId=true;
    this.showErrorpassword=true;


    if(this.adminId==="admin123")
{
  this.showErroradminId=false;
  // this.showError="invlaid ID";

}
else{
  this.showError="invlaid ID";
  // this.cleardata();


}

if(this.password==="admin")
{
  this.showErrorpassword=false;
  // this.cleardata();

}
else{
  this.showError="invlaid password";
  // this.cleardata();


}

if (this.adminId === "admin123" && this.password === "admin") {
  console.log(this.adminId);
 
  localStorage.setItem('admin', this.adminId);
  this.router.navigateByUrl('/admindashboard');
 
}
else{
  this.showErrorinvalid=false;
  this.showError="Invlaid ID/Password";

  // this.cleardata();
}
    
  }
  cleardata(){
    this.adminId="";
    this.password="";

  }




  checkadmin(){
    if ( this.password === "admin") {
     this.showErroradminId = true;
    //  this.showErrorpassword=true;
   }}
  checkpassword(){
     if (this.adminId === "" && this.password === "admin") {
      this.showErroradminId = false;
      this.showErrorpassword=true;
    
  }
  
  }


  ngOnInit(): void {
    this.title.setTitle('adminlogin');
    if (localStorage.getItem('admin')) {
      this.router.navigateByUrl('/admindashboard');
    }
  }
}
