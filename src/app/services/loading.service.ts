import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
//bir değişkenin abona olunabilir hale getirilmesi için  Subject veya BehaviorSubject classları kullanılır.
//subscribeable alanlar isimlendirilirken sonuna $ işareti eklenir.
//subject başlangıçta undefined
//behavior Subject başlangıç değeri ister
  isLoading$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  startLoading(){
    this.isLoading$.next(true);
  }

  stopLoading(){
    this.isLoading$.next(false);
  }
}
