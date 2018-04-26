import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ProductsComponent} from './components/products/products.component';
import { ProductListComponent } from './components/product_list/product_list.component';
import { ProductFilterComponent } from './components/product_filter/product_filter.component';
import { ProductDetailComponent } from './components/product_detail/product_detail.component';
import {RouterModule} from '@angular/router';
import {routes} from './products.routes';
import { CartComponent } from './components/cart/cart.component';
import { ColorListComponent } from './components/color_list/color_list.component';
import { SingleProductComponent } from './components/single_product/single_product.component';
import { HighlightDirective } from './directives/highlight.directive';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductFilterComponent,
    ProductDetailComponent,
    CartComponent,
    ColorListComponent,
    SingleProductComponent,
    HighlightDirective
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule {
}
