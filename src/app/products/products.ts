import { Component } from '@angular/core';
import { ProductComponent } from '../product/product';

@Component({
  selector: 'products', // can be used in other files as <products></products>, also ".", "#", we can use these symbols to present it as a class or ID in div tag
  templateUrl: './products.html',
  imports: [ProductComponent],
})
export class ProductsComponent {}
