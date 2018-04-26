import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'spa-product',
  templateUrl: 'single_product.component.html',
  styleUrls: ['single_product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleProductComponent implements OnInit {
  @Input() public id: number;
  @Input() public name: string;
  @Input() public price: number;
  @Input() public currency: string;
  @Input() public imageUrl: string;
  @Input() public description: string;
  ngOnInit() {}
}
