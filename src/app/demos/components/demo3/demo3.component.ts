import { Component } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrl: './demo3.component.scss'
})
export class Demo3Component {
  myString : string = "bOnjoUR lEs PetiTs PéDestREs"
  myNumber : number = 10.147
  myDate : Date = new Date()

  mesEuros : number = 12345678
}
