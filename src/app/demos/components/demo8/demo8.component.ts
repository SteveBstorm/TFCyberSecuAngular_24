import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrl: './demo8.component.scss'
})
export class Demo8Component {
  constructor(private _router : Router){}

  listePersonne : any = [
    {nom : "Arthur", email : "arthur@kaamelott.com"},
    {nom : "Leodagan", email : "roi@carmelide.com"},
    {nom : "Merlin", email : "coco@lasticot.com"},
  ]

  redirect(index : number){
    this._router.navigate(["demo/cible", index])
  }
}
