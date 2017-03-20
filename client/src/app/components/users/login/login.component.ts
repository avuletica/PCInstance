import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';

declare var Materialize: any;

@Component({
	selector: 'login',
	templateUrl: 'login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent {
	username: string;
	password: string;
	constructor(public authService: AuthService, public router: Router) { }

	login() {
		if (this.password && this.username) {
			this.authService.login(this.username, this.password).subscribe(() => {
				if (this.authService.isLoggedIn)
					this.router.navigate(['/home']);
				else
					Materialize.toast("The username or password you have entered is invalid", 2000);
			});
		}
	}

	logout() {
		this.authService.logout();
	}
}