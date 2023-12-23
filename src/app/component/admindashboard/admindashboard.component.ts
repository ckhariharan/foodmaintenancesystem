import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit{




  constructor(public router: Router,private title:Title) { }



  ngOnInit(): void {

    if (!localStorage.getItem('admin')) {
      this.router.navigateByUrl('');
      // Swal.fire("unauthorized user", "", "warning");
    }
  }
  
addnewstaff(){
  this.router.navigateByUrl('\addnewstaff');
}
adminanalysis(){
  this.router.navigateByUrl('\adminanalysis');
}
admindelivary(){
  this.router.navigateByUrl('/admindelivary');
}
adminproductanalysis(){
  this.router.navigateByUrl('/adminproductanalysis');

}


logout(){
  localStorage.removeItem('admin');
  this.router.navigateByUrl('');
}

}

