import { TestBed, inject } from '@angular/core/testing';

import { CartComponent } from './cart.component';

describe('a cart component', () => {
	let component: CartComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CartComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CartComponent], (CartComponent : any) => {
		component = CartComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});