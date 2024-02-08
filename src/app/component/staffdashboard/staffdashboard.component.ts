import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnrollnewstaffService } from 'src/app/services/enrollnewstaff.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, Subject, takeUntil } from 'rxjs';

import Swal from 'sweetalert2';
import { TimeScale } from 'chart.js';
import { SigninService } from 'src/app/services/signin.service';

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

// Name: string = 'ljlkj';
// Phone: string = ''; 
//  SID: string = '';
 Section:string='';

showError: string = '';
private unsubscribe$ = new Subject<void>();


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
  userdata: any;
  phonenumber!: any;
  staffDatas: any[]=[];
constructor(public router:Router,private db: AngularFireDatabase,private signin:SigninService,public newstaffs:EnrollnewstaffService){}

tabledata: any[]=[];



  ngOnInit(): void {
    
    if (!localStorage.getItem('staff')) {
      this.router.navigateByUrl('');

    
    }
this.phonenumber=localStorage.getItem('staff');
console.log(this.phonenumber)

// this.Name=this.userdata.Name;
    this.splash();
    // setTimeout(() => {
    //   this.showsplash = false;
    // },1000);
this.profile();
this.getuserdata();

 
      // Swal.fire("unauthorized user", "", "warning");
    


  }


  // getdata(){
  //   this.newstaff.getstaff().subscribe(data => {
  //     console.log(data);
  //     this.tabledata=data;
  //   });
  //   }
    
// checkUserExistence() {

//   const usersRef = this.db.list('newstaffs', (ref) =>
//     ref.orderByChild('Section').equalTo(this.Section)
//   );
//   const users$: Observable<any[]> = usersRef.valueChanges();

//   users$
//     .pipe(takeUntil(this.unsubscribe$))
//     .subscribe((users: any) => {
// console.log(users)
      // this.getdata();
//     });
// }


getuserdata() {
  this.newstaffs.getUserDataByPhoneNumber(this.phonenumber).subscribe(res => {
    console.log(res);
    const data: any = res[0];
    console.log(data);
    this.staffDatas = [data]; // Assuming you want to assign the fetched data to staffDatas
    console.log(this.staffDatas); 
    localStorage.setItem('staffData', JSON.stringify(this.staffDatas));

    // You can directly access staffDatas without retrieving from local storage again
    if (this.staffDatas.length > 0) {
      console.log(this.staffDatas[0]);
    }
    
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
     if(localStorage.getItem('a')) {
      this.router.navigateByUrl('staffanalysis');
     }
    //  this.checkUserExistence();


  }

  addproduct(){
    localStorage.setItem('p', 'product');
    this.router.navigateByUrl('addproduct')
  }

  analysis(){
    localStorage.setItem('a', 'analysis');
    this.router.navigateByUrl('staffanalysis')
  }

}
