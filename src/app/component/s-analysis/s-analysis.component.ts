import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-s-analysis',
  templateUrl: './s-analysis.component.html',
  styleUrls: ['./s-analysis.component.css']
})
export class SAnalysisComponent implements OnInit {



  constructor(public router:Router,){}

  ngOnInit(): void {
    if (!localStorage.getItem('a')) {
      this.router.navigateByUrl('staffdashboard');
    }
    }

  logout()
  {
    localStorage.removeItem('a');
    this.router.navigateByUrl('staffdashboard');
  }
}
