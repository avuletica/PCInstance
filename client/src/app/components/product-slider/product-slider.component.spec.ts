import { TestBed, inject } from '@angular/core/testing';

import { ProductSliderComponent } from './product-slider.component';

describe('a product-slider component', () => {
	let component: ProductSliderComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ProductSliderComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ProductSliderComponent], (ProductSliderComponent: ProductSliderComponent) => {
		component = ProductSliderComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});