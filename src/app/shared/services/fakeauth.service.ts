import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeauthService {

  isConnected : boolean = true

  isConnectedSubject : Subject<boolean> = new Subject<boolean>()

  constructor() { }

  login(){
    this.isConnected = true
    this.isConnectedSubject.next(this.isConnected)
  }

  logout(){
    this.isConnected = false
    this.isConnectedSubject.next(this.isConnected)
  }
}
