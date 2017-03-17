import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../model/Product';

@Component({
	selector: 'product-dashboard',
	templateUrl: 'product-dashboard.component.html',
	styleUrls: ['./product-dashboard.component.css']
})

export class ProductDashboardComponent implements OnInit {
	products: Product[];
	title: string;
	price: string;
	state: string;
	isEdit: boolean;
	editProduct: number;
	lastProductTitle: string;
	lastProductPrice: string;
	lastProductState: string;
	productFilter = [{ 'filter': 'New' }, { 'filter': 'Best selling' }, { 'filter': 'Discount' }];
	selectedProductFilter = this.productFilter[0];
	selectedProductAddFilter = this.productFilter[0];

	ngOnInit() {
		 $('input#product_title, input#product_price').characterCounter();
	}

	constructor(private productService: ProductService) {
		this.productService.getProducts()
			.subscribe(products => {
				this.products = products;
			});
	}

	onProductFilterChange(product: any) {
		product.state = this.selectedProductFilter.filter;
	}

	checkProductState(productState: string) {
		if (productState == "New")
			this.selectedProductFilter = this.productFilter[0];
		else if (productState == "Best selling")
			this.selectedProductFilter = this.productFilter[1];
		else if (productState == "Discount")
			this.selectedProductFilter = this.productFilter[2];
	}

	onEditProductClick(productIndex: number, product: any, isEdit: boolean) {
		this.editProduct = productIndex;
		this.lastProductTitle = product.title;
		this.lastProductPrice = product.price;
		this.lastProductState = product.state;
		this.checkProductState(product.state);
		this.isEdit = isEdit;
	}

	cancelUpdateProduct(product: any, isEdit: boolean) {
		product.title = this.lastProductTitle;
		product.price = this.lastProductPrice;
		product.state = this.lastProductState;
		this.isEdit = isEdit;
		this.checkProductState(product.state);
	}

	addProduct() {
		event.preventDefault();
		var newProduct = {
			title: this.title,
			price: this.price,
			state: this.selectedProductAddFilter.filter
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

	updateProduct(product: any, isEdit: boolean) {
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

		this.isEdit = isEdit;
		this.checkProductState(product.state);

	}
}