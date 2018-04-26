import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Product, ProductFilter} from '../../../model/product';
import {ProductService} from '../../../services/product.service';
@Component({
  selector: 'spa-list',
  templateUrl: 'product_list.component.html',
  styleUrls: ['product_list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

  @Input() public items: Product[] = [];

  public readonly filters: ProductFilter[] = [
    <ProductFilter>{color: 'blue'},
    <ProductFilter>{color: 'green'},
    <ProductFilter>{color: 'gray'},
    <ProductFilter>{color: 'red'},
    <ProductFilter>{color: 'brown'},
    <ProductFilter>{color: 'black'},
    <ProductFilter>{color: 'dark-brown'},
  ];

  public activeFilters: ProductFilter[] = [];

  constructor(private productService: ProductService) {
  this.productService.getProducts()
    .subscribe(i => this.items = i);
  }

  ngOnInit() {
  }

  public itemsAfterFilter(): Product[] {
    return this.items.filter((item: Product) => {
      const matchActive: boolean = this.activeFilters.reduce((prev, curr) => {
        if (item.colors.includes(curr.color)) {
          return prev && true;
        } else {
          return false;
        }
      }, true);

      return matchActive;
    });
  }

  public updateActivatedFilters(filters: ProductFilter[]) {
    this.activeFilters = filters;
  }
}
