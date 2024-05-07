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
      {url : 'demo1', name : 'Typescript'},
    ]},
  ]
}
