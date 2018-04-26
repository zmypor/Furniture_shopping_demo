import {Component, Input, OnInit} from '@angular/core';
import {ProductColor} from '../../../model/product';

@Component({
  selector: 'spa-color-list',
  templateUrl: 'color_list.component.html',
  styleUrls: ['color_list.component.css']
})
export class ColorListComponent implements OnInit {

  @Input() colors: ProductColor[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
