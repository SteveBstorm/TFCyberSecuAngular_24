import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demos/components/demo/demo.component';
import { ExoComponent } from './exos/components/exo/exo.component';
import { Demo1Component } from './demos/components/demo1/demo1.component';
import { Demo2Component } from './demos/components/demo2/demo2.component';
import { Demo3Component } from './demos/components/demo3/demo3.component';
import { Exo1Component } from './exos/components/exo1/exo1.component';
import { Demo4Component } from './demos/components/demo4/demo4.component';
import { Demo5Component } from './demos/components/demo5/demo5.component';
import { Demo6Component } from './demos/components/demo6/demo6.component';
import { Demo7Component } from './demos/components/demo7/demo7.component';
import { Demo8Component } from './demos/components/demo8/demo8.component';
import { CibleComponent } from './demos/components/demo8/cible/cible.component';
import { Demo9Component } from './demos/components/demo9/demo9.component';


const routes: Routes = [
  {path : "demo", component : DemoComponent, children : [
    {path : "demo1", component : Demo1Component},
    {path : "demo2", component : Demo2Component},
    {path : "demo3", component : Demo3Component},
    {path : "demo4", component : Demo4Component},
    {path : "demo5", component : Demo5Component},
    {path : "demo6", component : Demo6Component},
    {path : "demo7", component : Demo7Component},
    {path : "demo8", component : Demo8Component},
    {path : "demo9", component : Demo9Component},
    {path : "cible/:id", component : CibleComponent}
  ]},
  {path : "exo", component : ExoComponent, children : [
    {path : "exo1", component : Exo1Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
