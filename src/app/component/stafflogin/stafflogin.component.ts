import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { EnrollnewstaffService } from 'src/app/services/enrollnewstaff.service';
import Swal from 'sweetalert2';
import { Observable, Subject, takeUntil } from 'rxjs';

// interface stafffield {
//   Phone: string;
//   SID: string;
// }

@Component({
  selector: 'app-stafflogin',
  templateUrl: './stafflogin.component.html',
  styleUrls: ['./stafflogin.component.css']
})
export class StaffloginComponent  implements OnInit{


  Phone: string = '';
  SID: string = '';

  showError: string = '';
  private unsubscribe$ = new Subject<void>();
  loggedUser!: any;



    constructor (public router: Router,private title:Title,private enrollnewstaff:EnrollnewstaffService, private db: AngularFireDatabase,){}




    
onsubmit() {
  this.validation();
}

validation() {
  if (this.SID === "") {
    this.showError = "Please enter Staff ID";
  } else
  if (this.Phone === "") {
    this.showError = "Please enter Phone No";
  } else

  if (this.Phone === "" && this.SID === "") {
    this.showError = "Please enter Staff ID & Phone Number";
  }  else 
    if (this.Phone && this.SID) {
      this.checkUserExistence();

  } else {
    this.showError = "Invalid User!";
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
        const foundUser = users.find(user => user.SID === this.SID);
        console.log(users);
        this.loggedUser = users[0]

        if (foundUser) {
          const user = foundUser;
          console.log(user)
   

          this.Phone = '';
          this.SID = '';
    localStorage.setItem('staff', user.Phone);

          this.router.navigateByUrl('/staffdashboard');
    Swal.fire("Login SuccessFully", "", "success");

        } else {
          console.log('Invalid password');
          this.showError = "Invalid Password";
        }
      } else {
        console.log('User does not exist');
        this.showError = "Invalid SID";
      }
    });
}


// performLogin() {
//   const loginData: stafffield = { Phone: this.Phone, SID: this.SID };

//   this.enrollnewstaff.getItems().subscribe(data => {
//     (users: stafffield[]) => {
//       const foundUser = users.find(user => user.Phone === loginData.Phone && user.SID === loginData.SID);
//       if (foundUser) {
//         console.log(data)
//         this.router.navigate(['/staffdashboard']);
//         localStorage.setItem('staff', this.Phone);
//       } else {
//         this.showError = "Invalid User!";
//       }
//     }
// });
// }

ngOnInit(): void {
  this.title.setTitle('stafflogin');
  this.onsubmit();
  if (localStorage.getItem('staff')) {
    this.router.navigateByUrl('\staffdashboard');

    
  }
}

}
