import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../model/Product';

@Component({
	selector: 'admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent {
	products: Product[];
	title: string;
	price: string;
	state: string;
	isEdit: boolean;
	editProduct: number;
	productFilter = [{ 'filter': 'New' }, { 'filter': 'Best selling' }, { 'filter': 'Discount' }];
	selectedProductFilter = this.productFilter[1];

	constructor(private productService: ProductService) {
		this.productService.getProducts()
			.subscribe(products => {
				this.products = products;
			});
	}

	onEditProductClick(i:any) {		
		this.editProduct = i;		
	}	

	addProduct() {
		event.preventDefault();
		var newProduct = {
			title: this.title,
			price: this.price,
			state: this.state
		}

		this.productService.addProduct(newProduct)
			.subscribe(product => {
				this.products.push(product);
				this.title = '';
				this.price = '';
				this.state = '';
			});
	}

	deleteProduct(id: any) {
		var products = this.products;

		this.productService.deleteProduct(id).subscribe(data => {
			if (data.n == 1) {
				for (var i = 0; i < products.length; i++) {
					if (products[i]._id == id) {
						products.splice(i, 1);
					}
				}
			}
		});
	}

	updateProduct(product: any, test: any) {
		var _product = {
			_id: product._id,
			title: product.title,
			price: product.price,
			state: this.selectedProductFilter.filter
		};

		this.productService.updateProduct(_product).subscribe(data => {
			_product.title = product.title;
			_product.price = product.price;
			_product.state = product.state;
		});
	}
}