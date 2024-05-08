import { Component } from '@angular/core';
import { Link } from '../../models/link.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  listeLien : Link[] = [
    {url : 'demo', name : 'Les démos', children : [
      {url : 'demo/demo1', name : 'Typescript'},
      {url : 'demo/demo2', name : 'Bindings'},
      {url : 'demo/demo3', name : 'Pipes'},
      {url : 'demo/demo4', name : 'Directives'},
    ]},
    {url : 'exo', name : 'Les exos', children : [
      {url : 'exo/exo1', name : 'Chronomètre'}
    ]}
  ]

  showChildren(index : number){
    this.listeLien[index].isChildrenVisible = !this.listeLien[index].isChildrenVisible
  }
}
