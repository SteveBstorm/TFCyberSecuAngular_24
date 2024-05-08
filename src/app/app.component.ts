import { Component } from '@angular/core';
import { Link } from './shared/models/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TFCyberSecuDemoNG';

  LienDeLapp : Link[] = [
    {url : 'demo', name : 'Les démos', children : [
      {url : 'demo/demo1', name : 'Typescript'},
      {url : 'demo/demo2', name : 'Bindings'},
      {url : 'demo/demo3', name : 'Pipes'},
      {url : 'demo/demo4', name : 'Directives'},
      {url : 'demo/demo5', name : 'Input / Output'},
      {url : 'demo/demo6', name : 'Service & Injection'},
      {url : 'demo/demo7', name : 'Formulaires'},
      {url : 'demo/demo8', name : 'Routing'},
    ]},
    {url : 'exo', name : 'Les exos', children : [
      {url : 'exo/exo1', name : 'Chronomètre'}
    ]}
  ]
}
