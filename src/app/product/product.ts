import { Component } from '@angular/core';

@Component({
  selector: '[product]', // can be used as an attribute in other files like <div product></div>
  templateUrl: './product.html',
  // template: '<p>Product 1</p>', // You can use `` for multiple lines of HTML code, and '' for single line of HTML code
  styles: ['p {color: blue;}'],
})
export class ProductComponent {
  productId: number = 10;
  stockStatus: string = 'Yes';
  getStockStatus() {
    return this.stockStatus;
  }
}
