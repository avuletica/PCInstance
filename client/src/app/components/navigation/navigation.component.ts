import { Component, OnInit } 	from '@angular/core';
import { ProductService } 		from '../../services/product.service';
import { Router }				from '@angular/router'

@Component({
	selector: 'app-navigation',
	templateUrl: 'navigation.component.html',
	styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

	ngOnInit() { }

	private searchValue: string;
	private myQueryParams = [{}];
	constructor(private router: Router) { }

	moveToSearch() {
		if (!this.searchValue) {
			this.router.navigate(['/home']);
		}
		else {
			this.myQueryParams = [
				{ id: 1, param: this.searchValue },
			];

			this.router.navigate(['/search'], {
				queryParams: {
					filter: JSON.stringify(this.myQueryParams)
				}
			});
		}

	}
}