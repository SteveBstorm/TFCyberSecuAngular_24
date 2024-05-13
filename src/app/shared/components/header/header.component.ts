import { Component } from '@angular/core';
import { FakeauthService } from '../../services/fakeauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  suisJeConnecte! : boolean

  constructor(private _fakeAuth : FakeauthService){
    this.suisJeConnecte = _fakeAuth.isConnected

    _fakeAuth.isConnectedSubject.subscribe({
      next : (data : boolean) =>  { this.suisJeConnecte = data }
    })
  }
}
