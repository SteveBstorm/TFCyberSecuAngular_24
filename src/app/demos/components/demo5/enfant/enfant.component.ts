import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.scss'
})
export class EnfantComponent {

  @Input() valeurDuParent! : string
  @Input() nbrDuParent! : number

  @Output() reponseEvent : EventEmitter<string>
      = new EventEmitter<string>()

  reponse! : string

  envoiReponse() {
    this.reponseEvent.emit(this.reponse)
  }

}
