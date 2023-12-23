import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-a-panalysis',
  templateUrl: './a-panalysis.component.html',
  styleUrls: ['./a-panalysis.component.css']
})
export class APanalysisComponent implements OnInit{




  constructor(public router: Router,private title:Title) { }



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  admindashboard(){
  this.router.navigateByUrl('\admindashboard');
}
adminanalysis(){
  this.router.navigateByUrl('\adminanalysis');
}
addnewstaff(){
  this.router.navigateByUrl('\addnewstaff');

}
admindelivary(){
  this.router.navigateByUrl('\admindelivary')
}



}
