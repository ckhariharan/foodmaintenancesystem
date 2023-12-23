import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, DatabaseSnapshot, AngularFireAction, } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private admindashboard: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) { 
    this.admindashboard = db.list('/admin');

  }
  createItem(item: any): void {
    this.admindashboard.push(item).then((response) => {
      console.log('Item added successfully with key:', response.key);
    })
      .catch((error) => { 
        console.error('Error adding item:', error);
      });
  }

  // getItems(): Observable<any[]> {
  //   return this.admindashboard.snapshotChanges().pipe(
  //     map(changes => {
  //       return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
  //     })
  //   );
  
    // getItems(): Observable<any[]> {
    //   return this.admindashboard.valueChanges();
    // }
   
    getItems(): Observable<any[]> {
      return this.admindashboard.snapshotChanges().pipe(
        map((changes: AngularFireAction<DatabaseSnapshot<any>>[]) => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
      }
  


  updateItem(key: string, value: any) {
    return this.admindashboard.update(key, value);
    }
  
    
  deleteItem(key: string): void {
    this.admindashboard.remove(key);
  }

  }