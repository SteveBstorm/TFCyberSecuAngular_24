import { Component } from '@angular/core';
import { FakeauthService } from '../../../shared/services/fakeauth.service';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrl: './demo6.component.scss'
})
export class Demo6Component {

  suisJeConnecte! : boolean

  constructor(private _fakeAuth : FakeauthService)
  {
    this.suisJeConnecte = _fakeAuth.isConnected
  }

  meConnecter(){
    this._fakeAuth.login()
    this.suisJeConnecte = this._fakeAuth.isConnected
  }
  meDeConnecter(){
    this._fakeAuth.logout()
    this.suisJeConnecte = this._fakeAuth.isConnected
  }
}
