import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  constructor(private http: Http, private router: Router) { }
  isLoggedIn: boolean = false;
  users: any;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  getUsers() {
    return this.http.get('http://localhost:3000/api/users')
      .map(res => res.json());
  }

  addUser(newUser: any) {
        console.log("called123");
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/user', JSON.stringify(newUser), { headers: headers })
            .map(res => res.json());
    }

  login(): Observable<boolean> {  
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/home']);
  }
}
