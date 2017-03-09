import { Component } from '@angular/core';

import '../assets/css/styles.css';
import { ProductService } from './services/product.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent { }
