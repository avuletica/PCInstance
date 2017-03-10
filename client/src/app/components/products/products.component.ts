import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../model/Product';

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    ngOnInit() { }

    products: Product[];

    constructor(private productService: ProductService, private cartService: CartService) {
        this.productService.getProducts()
            .subscribe(products => {
                this.products = products;
            });
    }

    addToCart(title: string, price: string) {
        event.preventDefault();
        var newProduct = {
            title: title,
            price: price
        }

        this.cartService.addToCart(newProduct).subscribe();
    }    

}