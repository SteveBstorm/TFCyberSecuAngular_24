import { Component } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrl: './demo4.component.scss'
})
export class Demo4Component {
  isVisible : boolean = false

  monStyle : any

  switchVisible() {
    this.isVisible = !this.isVisible
    this.monStyle = {
      'color' : this.isVisible ? 'red' : 'blue',
      'background-color' : this.isVisible ? 'cyan' : 'chartreuse'
    }
  }

  monTableau : string[] = ["Arthur", "Perceval", "Leodagan", "Kakashi","5"]

  choix! : string
}
