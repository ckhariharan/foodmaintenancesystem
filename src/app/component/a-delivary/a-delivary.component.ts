import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-a-delivary',
  templateUrl: './a-delivary.component.html',
  styleUrls: ['./a-delivary.component.css']
})
export class ADelivaryComponent implements OnInit{




  constructor(public router: Router,private title:Title) { }



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  admindashboard(){
  this.router.navigateByUrl('\admindashboard');
}
addnewstaff(){
  this.router.navigateByUrl('\addnewstaff');
}
adminanalysis(){
  this.router.navigateByUrl('\adminanalysis')
}
adminproductanalysis(){
  this.router.navigateByUrl('\adminproductanalysis');

}

}
