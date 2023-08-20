import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyTestCompComponent } from './my-test-comp/my-test-comp.component';
import { AvtoCompComponent } from './avto-comp/avto-comp.component';
import { PlaneCompComponent } from './plane-comp/plane-comp.component';
import { ShipCompComponent } from './ship-comp/ship-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTestCompComponent,
    AvtoCompComponent,
    PlaneCompComponent,
    ShipCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
