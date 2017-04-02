import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { User } from '../model/User';

import 'rxjs/Rx';

@Injectable()
export class UserService {
    public userLIst: any[];
    private http: Http;

    constructor(http: Http) { 
        this.userLIst = [];
        this.http = http;

        this.http.get("http://localhost:3000/api/products")
            .subscribe(
            response => {
                const serverItems: Array<any> = response.json();
                this.userLIst = serverItems.map(user => new User(user._id, user.username, user.password, user.email, user.firstName,
                    user.lastName, user.country, user.city, user.address, user.postalCode, user.creditCardNumber, user.userRole));
            },
            error => console.log("Error when getting users")
            );
    }

    getUsers() {
        return this.http.get('http://localhost:3000/api/users')
            .map(res => res.json());
    }

    addUser(newUser: any) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/user', JSON.stringify(newUser), { headers: headers })
            .map(res => res.json());
    }

    deleteUser(id: any) {
        return this.http.delete('http://localhost:3000/api/user/' + id)
            .map(res => res.json());
    }

    updateUser(user: any) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:3000/api/user/' + user._id, JSON.stringify(user), { headers: headers })
            .map(res => res.json());
    }
}