import { TestBed, inject } from '@angular/core/testing';

import { AdminComponent } from './admin.component';

describe('a admin component', () => {
	let component: AdminComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AdminComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AdminComponent], (AdminComponent : AdminComponent) => {
		component = AdminComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});