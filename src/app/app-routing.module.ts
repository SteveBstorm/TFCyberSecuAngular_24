import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demos/components/demo/demo.component';
import { ExoComponent } from './exos/components/exo/exo.component';
import { Demo1Component } from './demos/components/demo1/demo1.component';
import { Demo2Component } from './demos/components/demo2/demo2.component';
import { Demo3Component } from './demos/components/demo3/demo3.component';
import { Exo1Component } from './exos/components/exo1/exo1.component';
import { Demo4Component } from './demos/components/demo4/demo4.component';


const routes: Routes = [
  {path : "demo", component : DemoComponent, children : [
    {path : "demo1", component : Demo1Component},
    {path : "demo2", component : Demo2Component},
    {path : "demo3", component : Demo3Component},
    {path : "demo4", component : Demo4Component},
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
