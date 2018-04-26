import {Routes} from '@angular/router';
import {ProductsComponent} from './components/products/products.component';
import {ProductDetailComponent} from './components/product_detail/product_detail.component';
import {CartComponent} from './components/cart/cart.component';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'details/:id',
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];
