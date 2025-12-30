import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products';
import { ProductComponent } from './product/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsComponent, ProductComponent], // to actually use the component in the app you have to import it here
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('myNewApp');
}
