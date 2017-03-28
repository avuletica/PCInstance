import { Injectable }         from '@angular/core';
import { Router }             from '@angular/router'
import { Observable }         from 'rxjs/Observable';
import { Http, Headers }      from '@angular/http';

import { User }               from '../model/User';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  constructor(private http: Http, private router: Router) {
    this.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
  isLoggedIn: boolean = false;
  users: User[];
  userCheck: any;

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

  login(username: string = "none", password: string = "none"): Observable<boolean> {
    this.userCheck = this.users.find(user => user.username === username)

    if (this.userCheck == null)
      return Observable.of(false).do(val => this.isLoggedIn = false);

    if (this.userCheck.username === username && this.userCheck.password === password)
      return Observable.of(true).do(val => this.isLoggedIn = true);
    else
      return Observable.of(false).do(val => this.isLoggedIn = false);
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/home']);
  }
}  
