import { TestBed, inject } from '@angular/core/testing';

import { ProductDashboardComponent } from './product-dashboard.component';

describe('a product-dashboard component', () => {
	let component: ProductDashboardComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ProductDashboardComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ProductDashboardComponent], (ProductDashboardComponent : ProductDashboardComponent) => {
		component = ProductDashboardComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});