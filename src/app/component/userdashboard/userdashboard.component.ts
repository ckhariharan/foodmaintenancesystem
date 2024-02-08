import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EnrollnewstaffService } from 'src/app/services/enrollnewstaff.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';


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
  tabledata : any[]=[];

constructor (public router:Router,private title:Title,private db: AngularFireDatabase, private newstaff: EnrollnewstaffService,){}
  ngOnInit() {
    this.title.setTitle("Food -|- Userdashboard");
    this.get();

   if (!localStorage.getItem('token')) {
      this.router.navigateByUrl('');
      // Swal.fire("unauthorizeduser", "", "warning");
    }
}


get(){
  this.newstaff.getproduct().subscribe(data => {
    console.log(data);
    this.tabledata=data;

    // console.log(this.lastSID);

  });
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