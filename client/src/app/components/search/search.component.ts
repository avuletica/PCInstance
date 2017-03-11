import { Component, OnInit } 		from '@angular/core';
import { Router, ActivatedRoute } 	from '@angular/router';

import { ProductService } 			from '../../services/product.service';
import { Product } 					from '../../model/Product';

@Component({
	selector: 'search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css'],
})
export class SearchComponent {
	private keyword: string;
	private ob: Object;
	private products: Product[];

	constructor(private productService: ProductService, private route: ActivatedRoute) {
		this.productService.getProducts()
			.subscribe(products => {
				this.products = products;
			});

		this.route.queryParams.subscribe((p: any) => {
			if (p.filter) {
				this.ob = JSON.parse(p.filter)
				this.keyword = this.ob["0"].param
			}
		});
	}
}