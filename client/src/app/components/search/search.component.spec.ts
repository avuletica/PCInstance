import { TestBed, inject } from '@angular/core/testing';

import { SearchComponent } from './search.component';

describe('a search component', () => {
	let component: SearchComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SearchComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SearchComponent], (SearchComponent : SearchComponent) => {
		component = SearchComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});