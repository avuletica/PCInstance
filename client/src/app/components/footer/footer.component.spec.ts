import { TestBed, inject } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('a footer component', () => {
	let component: FooterComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				FooterComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([FooterComponent], (FooterComponent : any) => {
		component = FooterComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});