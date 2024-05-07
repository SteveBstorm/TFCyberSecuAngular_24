import { Component } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrl: './exo1.component.scss'
})
export class Exo1Component {
  tempsEcoule : number = 0
  timer : any

  start() {
    this.timer = setInterval(() => this.tempsEcoule ++, 1000)
  }
  pause() {
    clearInterval(this.timer)
    this.timer = null
  }
  reset() {
    this.pause()
    this.tempsEcoule = 0
  }
}
