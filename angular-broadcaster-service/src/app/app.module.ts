import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentAComponent } from './component/component-a/component-a.component';
import { ComponentBComponent } from './component/component-b/component-b.component';
import { MainComponent } from './component/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    ComponentBComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
