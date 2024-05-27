import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private userName$: BehaviorSubject<string> = new BehaviorSubject<string>('Guest');
  castUserName$: Observable<string> = this.userName$.asObservable();
  
  constructor() { }

  setUserName = (name: string) => {
    this.userName$.next(name) 
  }

}
