import { Component } from '@angular/core';
import { GoogleApiService } from 'src/app/services/google-api.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.css']
})
export class OauthComponent  {

  constructor(private readonly google:GoogleApiService){

  }


}
