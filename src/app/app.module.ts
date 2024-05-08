import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { DemoComponent } from './demos/components/demo/demo.component';
import { ExoComponent } from './exos/components/exo/exo.component';
import { Demo1Component } from './demos/components/demo1/demo1.component';
import { Demo2Component } from './demos/components/demo2/demo2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Demo3Component } from './demos/components/demo3/demo3.component';
import { EurtobtcPipe } from './shared/pipes/eurtobtc.pipe';
import { Exo1Component } from './exos/components/exo1/exo1.component';
import { TotimePipe } from './shared/pipes/totime.pipe';
import { Demo4Component } from './demos/components/demo4/demo4.component';
import { Demo5Component } from './demos/components/demo5/demo5.component';
import { EnfantComponent } from './demos/components/demo5/enfant/enfant.component';
import { Demo6Component } from './demos/components/demo6/demo6.component';
import { Demo7Component } from './demos/components/demo7/demo7.component';
import { Demo8Component } from './demos/components/demo8/demo8.component';
import { CibleComponent } from './demos/components/demo8/cible/cible.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    DemoComponent,
    ExoComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    EurtobtcPipe,
    Exo1Component,
    TotimePipe,
    Demo4Component,
    Demo5Component,
    EnfantComponent,
    Demo6Component,
    Demo7Component,
    Demo8Component,
    CibleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
