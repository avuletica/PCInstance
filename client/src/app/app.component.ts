import { Component }              from '@angular/core';

import { ProductService }         from './services/product.service';
import { CartService }            from './services/cart.service';
import { UserService }            from './services/user.service';

import '../assets/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, CartService, UserService]
})
export class AppComponent { }
