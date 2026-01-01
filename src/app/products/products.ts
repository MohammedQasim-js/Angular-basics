import { Component } from '@angular/core';
import { ProductComponent } from '../product/product';

@Component({
  selector: 'products', // can be used in other files as <products></products>, also ".", "#", we can use these symbols to present it as a class or ID in div tag
  templateUrl: './products.html',
  imports: [ProductComponent],
})
export class ProductsComponent {
  addProduct = true;
  // greet = 'Hello!';
  addProductStatus = 'No product added';
  enteredValue = '';
  constructor() {
    setTimeout(() => {
      this.addProduct = false;
    }, 4000);
  }

  onClick() {
    this.addProductStatus = 'Product added!';
  }

  onUpdateProductName(event: any) {
    console.log(event);
    this.enteredValue = (<HTMLInputElement>event.target).value;
  }
}
