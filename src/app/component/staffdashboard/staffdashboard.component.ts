import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnrollnewstaffService } from 'src/app/services/enrollnewstaff.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

import Swal from 'sweetalert2';
import { TimeScale } from 'chart.js';

// export class staff {
//   key: any;
//   Name!: string;
//   Phone!: string;
//   Section!: string;
//   Salary!: string;
//   SID!: string;
// }

@Component({
  selector: 'app-staffdashboard',
  templateUrl: './staffdashboard.component.html',
  styleUrls: ['./staffdashboard.component.css']
})
export class StaffdashboardComponent  implements OnInit{

  
menuopen:boolean=true;
showsplash:boolean=true;
profileopen:boolean=true;

Name: string = '';
Phone: string = '';


images: string[] = [
  '/assets/images/foodlogo.png',
  '/assets/images/foodbanner1.jpg',
  '/assets/images/googlelogo.png',


];
activeIndex: number = 0;
  isPopupVisible1: boolean=false;
  isPopupVisible2: boolean=false;
  isPopupVisible3: boolean=false;
  isPopupVisible4: boolean=false;
  private isDragging = false;
  private startX!: number;
constructor(public router:Router,private db: AngularFireDatabase,private newstaff:EnrollnewstaffService){}

tabledata: any[]=[];



  ngOnInit(): void {


    this.splash();
    // setTimeout(() => {
    //   this.showsplash = false;
    // },1000);
this.profile();
    if (!localStorage.getItem('staff')) {
      this.router.navigateByUrl('');

    

      // Swal.fire("unauthorized user", "", "warning");
    }

  }



  getdata(){
    this.newstaff.getAllByCategory(this.Phone).subscribe(data => {
      console.log(data);
      this.tabledata=data;
    });
    }
    

  handleButtonTouchUp() {
this.showsplash=false;

  }
  splash(){

this.showsplash=false;
 setTimeout(() => {
      this.showsplash = true;
    },9000);
    
    this.offsplash();


  }
  offsplash(){
    
this.showsplash=true;
setTimeout(() => {
     this.showsplash = false;
   },5000);
  }



menubar(){
  this.menuopen=!this.menuopen;

}

showPopup1() {
  this.isPopupVisible1=true;
  setTimeout(() => {
    this.isPopupVisible1 = false;

  }, 1000);
}showPopup2() {
  this.isPopupVisible2=true;
  setTimeout(() => {
    this.isPopupVisible2 = false;

  }, 1000);
}showPopup3() {
  this.isPopupVisible3=true;
  setTimeout(() => {
    this.isPopupVisible3 = false;

  }, 1000);
}showPopup4() {
  this.isPopupVisible4=true;
  setTimeout(() => {
    this.isPopupVisible4 = false;

  }, 1000);
}



  logout(){
    localStorage.removeItem('staff');
    this.router.navigateByUrl('');
  }


  profile(){
    this.profileopen=!this.profileopen;
    
    if(localStorage.getItem('p')) {
      this.router.navigateByUrl('addproduct');
     }
    this.getdata();

  }

  addproduct(){
    localStorage.setItem('p', 'product');
    this.router.navigateByUrl('addproduct')
  }


}
