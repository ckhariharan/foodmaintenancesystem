import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  private users: AngularFireList<any>;


  constructor(private db: AngularFireDatabase) { 
    this.users = db.list('/users');

  }

  createItem(item: any): void {
    this.users.push(item).then((response) => {
      console.log('Item added successfully with key:', response.key);
    })
      .catch((error) => { 
        console.error('Error adding item:', error);
      });
  }


  login(phoneNumber: any): Observable<any[]> {
    console.log("service starts");
    
    // console.log("service starts");

    return this.db
      .list('/users', (ref) =>
        ref.orderByChild('phoneNumber').equalTo(phoneNumber)
      )
      .valueChanges()
  }

}
