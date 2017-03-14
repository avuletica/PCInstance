import { TestBed, inject } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';

describe('a registration component', () => {
	let component: RegistrationComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				RegistrationComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([RegistrationComponent], (RegistrationComponent : RegistrationComponent) => {
		component = RegistrationComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});