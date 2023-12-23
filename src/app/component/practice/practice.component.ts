import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageuploadService } from 'src/app/services/imageupload.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
ImageuploadService
@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {

  // selectedFile: File | null = null;
  // uploadProgress: number | null = null;
  // imageUrl: string | null = null;

  
  // Touch start event handler
  handleButtonTouchStart(event: TouchEvent): void {
    console.log('Touch start event:', event);
    // Your custom logic for touch start
  }

  // Touch move event handler
  handleButtonTouchMove(event: TouchEvent): void {
    console.log('Touch move event:', event);
    // Your custom logic for touch move
  }

  // Touch end event handler
  handleButtonTouchEnd(event: TouchEvent): void {
    console.log('Touch end event:', event);
    // Your custom logic for touch end
  }

}
