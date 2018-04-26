import {Component, ViewEncapsulation} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {CartService} from './services/cart.service';
import {Product} from './model/product';
import {Observable} from 'rxjs/Rx';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'spa-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  public CartItems$: Observable<Product[]>;

  constructor(public location: Location
  , private cartService: CartService) {

    this.CartItems$ = this
      .cartService
      .getCartItems();

    this.CartItems$.subscribe(_ => _);
  }

}
