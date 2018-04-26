import {Routes, RouterModule} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products'
  },
  {
    path: 'products',
    loadChildren: './product_module/products.module#ProductsModule'
  }
];
