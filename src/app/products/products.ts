import { Component } from '@angular/core';
import { ProductComponent } from '../product/product';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'products', // can be used in other files as <products></products>, also ".", "#", we can use these symbols to present it as a class or ID in div tag
  templateUrl: './products.html',
  imports: [ProductComponent, FormsModule],
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
    this.addProductStatus = 'Product added! and entered value is ' + this.enteredValue;
  }

  onUpdateProductName(event: any) {
    console.log(event);
    this.enteredValue = (<HTMLInputElement>event.target).value;
  }
}
