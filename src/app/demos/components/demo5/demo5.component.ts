import { Component } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrl: './demo5.component.scss'
})
export class Demo5Component {
  maValeur : number = 69
  reponseRecueDeEnfant! : string

  receptionReponse(texte : string){
    this.reponseRecueDeEnfant = texte
  }
}
