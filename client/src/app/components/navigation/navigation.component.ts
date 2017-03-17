import { Component, OnInit } 	from '@angular/core';
import { ProductService } 		from '../../services/product.service';
import { Router }				from '@angular/router'

import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-navigation',
	templateUrl: 'navigation.component.html',
	styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
	ngOnInit() {
		$(".button-collapse").sideNav();		
	}

	private searchValue: string;
	private myQueryParams = [{}];
	constructor(private authService: AuthService, private router: Router) { }

	onAdminClick(){
		$('.button-collapse').sideNav('show');
	}

	onAdminEditProductClick() {
		$('.button-collapse').sideNav('hide');
	}

	onAdminEditUserClick() {
		$('.button-collapse').sideNav('hide');
	}

	logout() {
		this.authService.logout();		
	}

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