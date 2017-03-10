import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../model/Product';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    products: Product[];
    constructor(private cartService: CartService) {
        this.cartService.getCartItems()
            .subscribe(products => {
                this.products = products;
            });
    }

    deleteFromCart(id: any) {
        var products = this.products;

        this.cartService.deleteFromCart(id).subscribe(data => {
            if (data.n == 1) {
                for (var i = 0; i < products.length; i++) {
                    if (products[i]._id == id) {
                        products.splice(i, 1);
                    }
                }
            }
        });
    }

    ngOnInit() { }

}