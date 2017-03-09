import { TestBed, inject } from '@angular/core/testing';

import { ProductsComponent } from './products.component';

describe('a products component', () => {
	let component: ProductsComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ProductsComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ProductsComponent], (ProductsComponent : any) => {
		component = ProductsComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});