import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffloginService {
  private users: AngularFireList<any>;


  constructor(private db: AngularFireDatabase) { 
    this.users = db.list('/');

  }
}
