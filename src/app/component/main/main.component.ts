import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TimeScale } from 'chart.js';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
 
})
export class MainComponent implements OnInit {

  optionopen:boolean=false;
constructor (public router:Router,private title:Title){}

 ngOnInit(): void {
  this.title.setTitle("Food");

 if(localStorage.getItem('token')) {
  this.router.navigateByUrl('userdashboard');
 }
 if(localStorage.getItem('admin')) {
  this.router.navigateByUrl('admindashboard');
 }
 if(localStorage.getItem('staff')) {
  this.router.navigateByUrl('staffdashboard');
 }
 }
 handleButtonTouchUp() {
  console.log('Button touched up!');
  // Add your custom logic here
}

loginoptions(){
  this.optionopen=!this.optionopen;
}



}
