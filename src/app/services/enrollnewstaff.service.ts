import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, DatabaseSnapshot, AngularFireAction, } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnrollnewstaffService {
  patchValue: any;
  signInWithEmailAndPassword(arg0: string, SID: string) {
    throw new Error('Method not implemented.');
  }

  private staffcreate: AngularFireList<any>;
  private productcreate: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) { 
    this.staffcreate = db.list('/newstaffs');
    this.productcreate = db.list('/newproducts');

  }
  createstaff(item: any): void {
    this.staffcreate.push(item).then((response) => {
      console.log('Item added successfully with key:', response.key);
    })
      .catch((error) => { 
        console.error('Error adding item:', error);
      });
  }
  getstaff(): Observable<any[]> {
    return this.staffcreate.snapshotChanges().pipe(
      map((changes: AngularFireAction<DatabaseSnapshot<any>>[]) => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
    );
    }
    getAllByCategory(category: any): Observable<any[]> {
      return this.staffcreate.snapshotChanges().pipe(
        map((changes: AngularFireAction<DatabaseSnapshot<any>>[]) => {
          return changes
            .filter(c => c.payload.val().category === category) // Filter by category
            .map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
    }
    updatestaff(key: string, value: any) {
      return this.staffcreate.update(key, value);
      }
    deletestaff(key: string): void {
      this.staffcreate.remove(key);
    }

  

    login(Phone: any): Observable<any[]> {
      console.log("service starts");
      
      console.log("service starts");
  
      return this.db
        .list('/newstaffs', (ref) =>
          ref.orderByChild('Phone').equalTo(Phone)
        )
        .valueChanges()
    }
  
 
    

getUserDataByPhoneNumber(phoneNumber: any) {
  // Replace 'users' with the actual path to your users in the database
  const usersRef = this.db.list('/newstaffs', (ref) =>
    ref.orderByChild('Phone').equalTo(Number(phoneNumber)));
  
  return usersRef.valueChanges(); // This returns an Observable of the data
}

    createproduct(item: any): void {
      this.productcreate.push(item).then((response) => {
        console.log('Item added successfully with key:', response.key);
      })
        .catch((error) => { 
          console.error('Error adding item:', error);
        });
    }
    getproduct(): Observable<any[]> {
      return this.productcreate.snapshotChanges().pipe(
        map((changes: AngularFireAction<DatabaseSnapshot<any>>[]) => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
      }

      updateproduct(key: string, value: any) {
        return this.productcreate.update(key, value);
        }
      deleteproduct(key: string): void {
        this.productcreate.remove(key);
      }
    
}
