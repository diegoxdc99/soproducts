import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  showLageImage = false;

  constructor() { }

  ngOnInit() {
  }

  showImage() {
    this.showLageImage = true;
  }

  closeImage() {
    this.showLageImage = false;
  }
}
