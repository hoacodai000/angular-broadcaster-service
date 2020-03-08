import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  MainComponent,
  ComponentAComponent,
  ComponentBComponent
} from './component/index';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ComponentAComponent,
    ComponentBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
