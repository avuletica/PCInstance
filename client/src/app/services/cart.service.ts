import { Injectable }       from '@angular/core';
import { Http, Headers }    from '@angular/http';

import { Product }          from '../model/Product';

import 'rxjs/Rx';

@Injectable()
export class CartService {

    constructor(private http: Http) { }

    getCartItems() {
        return this.http.get('http://localhost:3000/api/cart')
            .map(res => res.json());
    }

    addToCart(newProduct: any) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/cart', JSON.stringify(newProduct), { headers: headers })
            .map(res => res.json());
    }

    deleteFromCart(id: any) {
        return this.http.delete('http://localhost:3000/api/cart/' + id)
            .map(res => res.json());
    }

}