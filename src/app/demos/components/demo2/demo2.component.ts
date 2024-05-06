import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.scss'
})
export class Demo2Component {
  myProp : string = "Hello les pignoufs"

  url : string = "https://cdn.mos.cms.futurecdn.net/GP4zjwFvn5djdcZUbKEFuk.jpg"

  methode() {
    this.myProp = "Autre chose"
  }
}
