import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  tempPhone: any;
  isSidebarOpen: boolean = false;
  ismenuopen:boolean=true;
  isprofile:boolean=false;

constructor (public router:Router,private title:Title){}
  ngOnInit() {
    this.title.setTitle("Food -|- Userdashboard");

   if (!localStorage.getItem('token')) {
      this.router.navigateByUrl('');
      // Swal.fire("unauthorizeduser", "", "warning");
    }
}

toggleSidebar() {
  this.isSidebarOpen = !this.isSidebarOpen;
}



menu(){
  this.ismenuopen=!this.ismenuopen;
}

profile(){
  this.isprofile=!this.isprofile;
}

logout(){
  localStorage.removeItem('token');
  this.router.navigateByUrl('');
}


}