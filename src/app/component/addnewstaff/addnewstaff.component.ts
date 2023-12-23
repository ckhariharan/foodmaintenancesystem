import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { EnrollnewstaffService } from 'src/app/services/enrollnewstaff.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import Swal from 'sweetalert2';
import { Observable, Subject, takeUntil } from 'rxjs';

import { SigninService } from 'src/app/services/signin.service';


export class staff {
  key: any;
  Name!: string;
  Phone!: string;
  Section!: string;
  Salary!: string;
  SID!: string;
  }


@Component({
  selector: 'app-addnewstaff',
  templateUrl: './addnewstaff.component.html',
  styleUrls: ['./addnewstaff.component.css']
})




export class AddnewstaffComponent  implements OnInit {

  Name: string = '';
  Phone: string = '';
  Salary: string = '';
  SID: string = '';
  lastSID: string = '';
  Gender!: string ;
  selectedUser: any | null = null;
  showDialog: boolean = false;

  Section: string = '';
  date = new Date();
  showError: string = '';
  // tabledata: any[]=[];
  private unsubscribe$ = new Subject<void>();



  formattedDate = this.date.toLocaleDateString('en-GB');
  showErrorPhnNO!: boolean;
  dob:string='';
  selectedDay: string = '';
  selectedMonth: string = '';
  selectedYear: string = '';
  days: string[] = [];
  months: string[] = [];
  years: string[] = [];
  
    
    constructor(public router: Router, private title: Title, private formBuilder: FormBuilder,private db: AngularFireDatabase, private newstaff: EnrollnewstaffService,) { }



  staffs: staff = new staff()
  staffList: staff[] = [];



  createStaffForm!: FormGroup;


  ngOnInit(): void {
    this.getdata();
    this.createStaffForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Date: [this.formattedDate],
      Phone: ['', Validators.required],
      Section:[''],  
      Salary: ['', Validators.required],
      SID: [],
      lastSID: [],
      Gender: [''],
     dob:['']

    })
    
    for (let i = 1; i <= 31; i++) {
      this.days.push(i.toString());
    }

    this.months = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];

    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 100; i--) {
      this.years.push(i.toString());
    }
    
    this.getLastSID();
  }

  onSubmit() {
    this.createStaffForm.value.SID = this.lastSID;
    // this.createStaffForm.value.Gender=this.Gender;
   
    console.log(this.createStaffForm.value);
    this.newstaff.createstaff(this.createStaffForm.value);
   this.clearform();


  }


  getdata(){
    this.newstaff.getstaff().subscribe(data => {
      console.log(data);
      this.staffList=data;

      this.getLastSID();
      // console.log(this.lastSID);

    });
    }
        
clearform(){
  this.createStaffForm.reset();
}

// toggleDialog(staff: any) {
//   this.selectedUser = staff;
//   if(this.selectedUser.Gender === "male") {
//     this.Gender = "Mr.";
//   } else if (this.selectedUser.Gender === "female"){
//     this.Gender = "Mrs.";
//   }
//   this.showDialog = !this.showDialog;
// }



  validation()  {
  this.dob=`${this.selectedDay}/${this.selectedMonth}/${this.selectedYear}`

    console.log(this.dob)


    this.showError="";  
    if (this.Name === "") {

      this.showError = "Please enter Name";
    }
    else if (this.Phone === "") {
      this.showError = "Please enter your Mobile No";
    } else if (parseInt(this.Phone) <= 0) {
      this.showError = "Invalid Mobile No";
    } else if (String(this.Phone).length !== 10) {
      this.showError = "Invalid Mobile No";
    } else if (this.Salary === "") {
      this.showError = "Please enter Salary";
    } else if (parseInt(this.Salary) <= 0) {
      this.showError = "Negative Value not valid";

    }  else if(this.Gender===undefined){
      this.showError="please enter gender";
    }
    else if (this.Section === "") {
      this.showError = "Please enter Section";
    } 
    else if(this.dob===""){
      this.showError="please enter date of brith";
    }
    else if (this.Name && this.Phone && this.Salary&&this.Section&&this.Gender&&this.dob) {

      this.createStaffForm.value.date = this.formattedDate;
      this.createStaffForm.value.dob=this.dob;
      // this.existingEmployee();
      this.checkUserExistence(); 

    }
  }

  // existingEmployee() {
  //   this.db.list('newstaffs').valueChanges().subscribe(
  //     (staffs: staff[]) => {
  //       const found = staffs.find(staff => staff.SID === this.SID);
  //       if (found) {
  //         this.showError = "Existing Employee! ( 'Try Another E-id' )";
  //       } else {
  //         this.Create();
  //       }
  //     }
  //   );
  // }





  getLastSID() {
    if (this.staffList.length > 0) {
      const lastEmployee = this.staffList[this.staffList.length - 1];
      console.log(lastEmployee);
      const lastSID = lastEmployee.SID;
      const last3Digits = lastSID.slice(-3);
      const incrementedValue = Number(last3Digits) + 1;
      this.lastSID = "SID" + incrementedValue.toString().padStart(3, '0');
      console.log(lastSID);
    }
  }

  
  checkUserExistence() {
    const usersRef = this.db.list('newstaffs', (ref) =>
      ref.orderByChild('Phone').equalTo(this.Phone)
    );

    const users$: Observable<any[]> = usersRef.valueChanges();

    users$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((users) => {
        if (users.length > 0) {
          this.Phone = '';
Swal.fire("user exist")
          // this.showErrorPhnNO = true;
        } else {
          console.log('User does not exist');
          this.onSubmit();
          // this.showErrorPhnNO=true;

        }
      });
  }

  // existingEmployee() {
  // this.isloading=true;

  //   this.http.get<staff[]>('https://clothingbotiquesdb.onrender.com/employee').subscribe(
  //     (staffs: staff[]) => {
  //       const found = staffs.find(staff => staff.SID === this.SID);
  //       if (found) {
  //         // this.isloading=false;
  //         this.showError = "Existing Employee! ( 'Try Another E-id' )";
  //       } else {

  //         this.Create();
  //       }
  //     });
  // }
  // Create() {
  //   this.createStaffForm.value.EID = this.lastSID;
  //   this.newstaff.createItem(this.createStaffForm.value)
  //     .subscribe(resp => {
  //       console.log(resp);
  //       // this.isloading=false;
  //       Swal.fire('success!', 'New Staff Create Successfully!', 'success');
  //       this.resetFormFields();
  //       this.ngOnInit();
  //     })
  // }


  admindashboard() {
    this.router.navigateByUrl('\admindashboard');
  }
  adminanalysis() {
    this.router.navigateByUrl('\adminanalysis');
  }
  adminproductanalysis() {
    this.router.navigateByUrl('\adminproductanalysis');

  }
  admindelivary() {
    this.router.navigateByUrl('\admindelivary')
  }



}
