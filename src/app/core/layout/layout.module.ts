import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  declarations: [
    NavbarComponent,
    MenuComponent
  ],
  exports: [
    NavbarComponent,
    MenuComponent
  ]
})
export class LayoutModule {

}
