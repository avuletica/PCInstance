import { Component } from '@angular/core';

import { UserService } from '../../../../services/user.service';
import { User } from '../../../../model/User';

@Component({
    selector: 'user-dashboard',
    templateUrl: 'user-dashboard.component.html',
    styleUrls: ['./user-dashboard.component.css']
})

export class UserDashboardComponent {
    users: User[];
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
    userRole: string;
    editUser: number;
    editUserIndex: number;
    visibilityAddNewUser: boolean;
    isEditMode: boolean;
    userFilter = [{ 'filter': 'User' }, { 'filter': 'Staff' }, { 'filter': 'Admin' }];
    selectedUserRole = this.userFilter[0];
    

    constructor(private userService: UserService) {
        this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
        this.visibilityAddNewUser = false;
    }

    deleteUser(id: any) {
        var users = this.users;
        this.userService.deleteUser(id).subscribe(data => {
            for (var i = 0; i < users.length; i++)
                if (users[i]._id == id)
                    users.splice(i, 1);
        });
    }

    onAddNewUserClick() {
        this.visibilityAddNewUser = true;
    }

    editMode(userIndex: number, editMode: boolean, user: any) {
        if(editMode) {
            this.isEditMode = true;
            this.editUserIndex = userIndex;
            this.checkUserRole(user.userRole);
        }            
        else {
            this.isEditMode = false;
            this.editUserIndex = -1;
        }
            
    }

    onUserRoleChange(user: any) {
		user.userRole = this.selectedUserRole.filter;
	}

    checkUserRole(userRole: string) {
		if (userRole == "User")
			this.selectedUserRole = this.userFilter[0];
		else if (userRole == "Staff")
			this.selectedUserRole = this.userFilter[1];
		else if (userRole == "Admin")
			this.selectedUserRole = this.userFilter[2];
	}

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
            userRole: this.selectedUserRole.filter
        }

    

        this.userService.addUser(newUser).subscribe(user => this.users.push(user));
    }
    
    updateUser(user: any) {
		var newUserData = {
            _id: user._id,
            username: user.username,
            password: user.password,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            country: user.country,
            city: user.city,
            address: user.address,
            postalCode: user.postalCode,
            creditCardNumber: user.creditCardNumber,
            userRole: this.selectedUserRole.filter
        }

		this.userService.updateUser(newUserData).subscribe(data => {
			newUserData.username = user.username;
			newUserData.password = user.password;
			newUserData.email = user.email;
            newUserData.firstName = user.firstName;
			newUserData.lastName = user.lastName;
			newUserData.country = user.country;
            newUserData.city = user.city;
			newUserData.address = user.address;
			newUserData.postalCode = user.postalCode;
            newUserData.creditCardNumber = user.creditCardNumber;
			newUserData.userRole = user.userRole;		
		});
	}
}