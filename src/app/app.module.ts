import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {routes} from './app.routes';
import {RouterModule} from '@angular/router';
import {ProductsModule} from './product_module/products.module';
import {ProductService} from './services/product.service';
import {CartService} from './services/cart.service';
import {Location, CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ProductsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService, CartService, Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
