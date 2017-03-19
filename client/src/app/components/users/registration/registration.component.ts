import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';

import { User } from '../../../model/User';

@Component({
	selector: 'registration',
	templateUrl: 'registration.component.html',
	styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
	users: User[];
	_id: any;
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    country: string;
    city: string;
    address: string;
    postalCode: number;
    creditCardNumber: number;
    isAdmin: boolean;

	constructor(private authService: AuthService, public router: Router) {}

	addUser() {
		event.preventDefault();
		var newUser = {
			username: this.username,
			password: this.password,
			email: this.email,
			firstName: this.firstName,
			lastName: this.lastName,
			country: this.country,
			city: this.city,
			address: this.address,
			postalCode: this.postalCode,
			creditCardNumber: this.creditCardNumber,
			isAdmin: false
		}
		console.log(newUser);

		this.authService.addUser(newUser).subscribe();
		this.router.navigate(['/login']);
		
	} 
}