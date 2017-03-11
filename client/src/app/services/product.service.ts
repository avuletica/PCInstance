import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Product } from '../model/Product';

import 'rxjs/Rx';

@Injectable()
export class ProductService {
    public productItems: any[];
    private http: Http;

    constructor(http: Http) { //Dependency Injection
        this.productItems = [];
        this.http = http;

        this.http.get("http://localhost:3000/api/products")
            .subscribe(
            response => {
                const serverItems: Array<any> = response.json();
                this.productItems = serverItems.map(item => new Product(item._id, item.title, item.price, item.state));
            },
            error => console.log("Error when getting products")
            );
    }

    getProducts() {
        return this.http.get('http://localhost:3000/api/products')
            .map(res => res.json());
    }

    addProduct(newProduct: any) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/product', JSON.stringify(newProduct), { headers: headers })
            .map(res => res.json());
    }

    deleteProduct(id: any) {
        return this.http.delete('http://localhost:3000/api/product/' + id)
            .map(res => res.json());
    }

    updateProduct(product: any) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:3000/api/product/' + product._id, JSON.stringify(product), { headers: headers })
            .map(res => res.json());
    }
}