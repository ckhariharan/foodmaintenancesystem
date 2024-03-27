import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SigninService } from 'src/app/services/signin.service';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { GoogleApiService } from 'src/app/services/google-api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showErrorPhnNO: boolean =false;
  showError: boolean=false;
  phoneNumber!: any;
  password: any;
  showeye: boolean = false;


  constructor(public router: Router,private renderer: Renderer2,private signin:SigninService,private title:Title) { }

  // ngAfterViewInit(): void {
  //   this.addGoogleSignInScript();
  // }

  // private addGoogleSignInScript(): void {
  //   const script = this.renderer.createElement('script');
  //   script.src = 'https://accounts.google.com/gsi/client';
  //   script.async = true;
  //   this.renderer.appendChild(document.head, script);
  // }


  ngOnInit(): void { 
    this.title.setTitle("Food -|- Login");

    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('userdashboard');
      Swal.fire("Click Logout Button", "", "warning",);
    }
  
}

eye(){
this.showeye=!this.showeye; 
}
  

 inviteFacebook() {
  // const textToShare = 'foodMaintanance project link: https://nproject-190cc.web.app/';
  // const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(textToShare)}`;
  // window.open(facebookUrl, '_blank');  
  Swal.fire("Now The Service Is Not Available", "", "error");

}


 inviteInstagram() {
  // const textToShare = 'foodMaintanance project link: https://nproject-190cc.web.app/';
  // const instagramUrl = `https://www.instagram.com/share?url=${encodeURIComponent(textToShare)}`;
  // window.open(instagramUrl, '_blank');
  Swal.fire("Now The Service Is Not Available", "", "error");

}



invitewhatsapp(){
  // const textToShare = 'foodMaintanance project link: https://nproject-190cc.web.app/';
  // const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(textToShare)}`;
  // window.open(whatsappUrl, '_blank');
  Swal.fire("Now The Service Is Not Available", "", "error");


}

// https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap

login() {
  this.signin.login(this.phoneNumber).subscribe((users: any[]) => {
    if (users.length === 1) {
      const user = users[0];
      if (user.password === this.password) {
        console.log('Authentication successful');
        localStorage.setItem('token', this.phoneNumber);
        this.clearData();
    Swal.fire("Login Successfull", "", "success");
        this.router.navigateByUrl('userdashboard');
      } else {
        console.log('Incorrect password');
        this.password = "";
        this.showError = true;
      }
    } else {
      console.log('User not found');
      this.clearData();
    }
  });
}

clearData(){
  this.phoneNumber="";
  this.password="";
}


validation() {
  // Reset error flags initially
  this.showErrorPhnNO = false;
  this.showError = false;

  // Define a regular expression pattern for 10 digits
  const phoneNumberPattern = /^[0-9]{10}$/;

  if (this.phoneNumber == null || !phoneNumberPattern.test(this.phoneNumber)) {
    this.showErrorPhnNO = true;
  }

  if (!this.password) {
    this.showError = true;
  }

  if (this.phoneNumber && this.password && phoneNumberPattern.test(this.phoneNumber)) {
    this.showErrorPhnNO = false;
    this.showError = false;
    this.login();
  }
}

oauth(){
  this.router.navigateByUrl('/oauth');
  
}

}
