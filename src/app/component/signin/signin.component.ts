import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { SigninService } from 'src/app/services/signin.service';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  userName!: string;
  phoneNumber!: string;
  password!: string;
  addItemForm!: FormGroup;
  showErrorUserName: boolean = false;
  showErrorPhnNO: boolean = false;
  showError: boolean = false;
  showeye: boolean = false;

  private unsubscribe$ = new Subject<void>();



  constructor(
    private db: AngularFireDatabase,
    private fb: FormBuilder,
    private router: Router,
    private signinservice: SigninService,
    private title:Title) { }
  ngOnInit(): void {
    this.title.setTitle("Food -|- signup");

if(localStorage.getItem("token")){
  this.router.navigateByUrl("userdashboard")
}

    this.addItemForm = this.fb.group({
      userName: [''],
      phoneNumber: [''],
      password: ['']
    });
 
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


  onSubmit() {
    this.addItemForm.value.userName = this.userName;
    this.addItemForm.value.phoneNumber = this.phoneNumber;
    this.addItemForm.value.password = this.password;
    this.signinservice.createItem(this.addItemForm.value)

    localStorage.setItem('token', this.phoneNumber);
    Swal.fire("signup Successfull", "", "success");
    this.router.navigateByUrl("userdashboard");
  }


  checkUserExistence() {
    const usersRef = this.db.list('users', (ref) =>
      ref.orderByChild('phoneNumber').equalTo(this.phoneNumber)
    );

    const users$: Observable<any[]> = usersRef.valueChanges();

    users$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((users) => {
        if (users.length > 0) {
          this.phoneNumber = '';
          this.showErrorPhnNO = true;
        } else {
          console.log('User does not exist');
          this.onSubmit();
        }
      });
  }




  validation() {

    this.showErrorUserName = false;
    this.showErrorPhnNO = false;
    this.showError = false;

    const phoneNumberPattern = /^[0-9]{10}$/;

    if (this.userName == null) {
      this.showErrorUserName = true;
    }

    if (this.phoneNumber == null || !phoneNumberPattern.test(this.phoneNumber)) {
      this.showErrorPhnNO = true;
    }

    if (!this.password) {
      this.showError = true;
    }
    if (this.userName && this.phoneNumber && this.password && phoneNumberPattern.test(this.phoneNumber)) {
      this.showErrorUserName = false;
      this.showErrorPhnNO = false;
      this.showError = false;
      this.checkUserExistence();
    }
  }




}
