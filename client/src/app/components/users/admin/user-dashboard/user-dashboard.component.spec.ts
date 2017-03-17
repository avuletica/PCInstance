import { TestBed, inject } from '@angular/core/testing';

import { UserDashboardComponent } from './user-dashboard.component';

describe('a user-dashboard component', () => {
	let component: UserDashboardComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				UserDashboardComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([UserDashboardComponent], (UserDashboardComponent : UserDashboardComponent) => {
		component = UserDashboardComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});