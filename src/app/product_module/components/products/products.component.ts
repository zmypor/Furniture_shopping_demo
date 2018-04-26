import {Component, OnInit} from '@angular/core';
import {Product} from '../../../model/product';
import {ProductService} from '../../../services/product.service';
import {CartService} from '../../../services/cart.service';
@Component({
  selector: 'spa-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css']
})
export class ProductsComponent implements OnInit {

  public items: Product[] = [];
  constructor(private productService: ProductService
    , private cartService: CartService) {
    productService.getProducts()
      .subscribe(_ => this.items = _);

    this.cartService
      .getCartItems()
      .subscribe((items: Product[]) => {
      // remove items that are in our cart
        const allItems = this.items;
        this.items = allItems.filter(i => !this.itemInCart(i, items));
      });
    }
  ngOnInit() {}

  private itemInCart(item: Product, cart: Product[]): boolean {
    return cart.find(i => i.id === item.id) != null;
  }
}
