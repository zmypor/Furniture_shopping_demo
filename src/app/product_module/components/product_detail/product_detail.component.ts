import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../model/product';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'spa-detail',
  templateUrl: 'product_detail.component.html',
  styleUrls: ['product_detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product: Product = {};

  constructor(private route: ActivatedRoute
    , private router: Router
    , private productsService: ProductService
    , private cartService: CartService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.productsService
        .getProductByID(id)
        .subscribe(_ => this.product = _);
    });
  }

  public addToCart(product: Product) {
    this.cartService.addCartItem(product);
    this.router.navigateByUrl('/');
  }
}

