import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cible',
  templateUrl: './cible.component.html',
  styleUrl: './cible.component.scss'
})
export class CibleComponent {
  id! : number

  constructor(private _ar : ActivatedRoute){
    this.id = _ar.snapshot.params["id"]
  }
}
