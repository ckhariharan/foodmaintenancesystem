import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageuploadService {

  constructor(private storage: AngularFireStorage) {}

  uploadImage(file: File, path: string): Observable<string | null> {
    const filePath = `${path}/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
  
    return task.percentageChanges().pipe(
      map(progress => progress !== undefined ? `${progress}` : null)
    );
  }

  getImageUrl(path: string): Observable<string | null> {
    const fileRef = this.storage.ref(path);
    return fileRef.getDownloadURL();
  }
}
