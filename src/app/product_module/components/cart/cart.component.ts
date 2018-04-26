import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {Product} from '../../../model/product';
import {Observable} from 'rxjs/Rx';
import {of} from 'rxjs/observable/of';

@Component({
  selector: 'spa-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css']
})
export class CartComponent implements OnInit {

  public CartItems$: Observable<Product[]> = of([]);
  public CartItems: Product[] = [];

  constructor(private cartService: CartService) {
    this.CartItems$ = this
      .cartService
      .getCartItems();
    this.CartItems$.subscribe(i => this.CartItems = i);
  }

  ngOnInit() {
  }

  public totalAmount(): Observable<number> {
    return this.cartService.Total();
  }

  public removeItem(item: Product) {
    this.cartService.removeCartItem(item);
  }
}
