import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelsBanxicoModule } from './models-banxico/models-banxico.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelsBanxicoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
