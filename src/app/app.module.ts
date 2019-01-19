import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppProductTitleComponent } from './app-product-title/app-product-title.component';
import { AppProductListComponent } from './app-product-list/app-product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppProductTitleComponent,
    AppProductListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
