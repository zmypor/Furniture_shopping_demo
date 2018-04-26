import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs/Rx';
import {of} from 'rxjs/observable/of';
@Injectable()
export class CartService {
  private CartitemSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  private Cartitems: Product[] = [];

  constructor() {
    this.CartitemSubject.subscribe(i => this.Cartitems = i);
  }

  public addCartItem(item: Product) {
    const currentItems = [...this.Cartitems];
    this.CartitemSubject.next([...this.Cartitems, item]);
  }

  public removeCartItem(item: Product) {
    const currentItems = [...this.Cartitems];
    const retainedItems = currentItems.filter(i => i.id !== item.id);
    this.CartitemSubject.next(retainedItems);
  }

  public getCartItems(): Observable<Product[]> {
    return this.CartitemSubject.asObservable();
  }

  public Total(): Observable<number> {
    return this.CartitemSubject.map((items: Product[]) => items.reduce((prev, curr: Product) => prev + curr.price, 0)
);
}
}
