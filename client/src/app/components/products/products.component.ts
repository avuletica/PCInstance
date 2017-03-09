import { Component, OnInit }    from '@angular/core';

import { Product }              from '../../model/Product';
import { ProductService }       from '../../services/product.service';

@Component({
	selector: 'products',
	templateUrl: 'products.component.html',
    styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

	ngOnInit() { }

	products: Product[];

    constructor(private productService: ProductService) {
        this.productService.getProducts()
            .subscribe(products => {
                this.products = products;
            });
    }      
    
}