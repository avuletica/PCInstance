import { Pipe, PipeTransform, Injectable } from '@angular/core';

import { Product } from '../model/Product';

@Pipe({
    name: 'productSearch',
    pure: false
})
@Injectable()
export class ProductSearchPipe implements PipeTransform {
    transform(products: Product[], keyword: string): any {
        if (!products) { return []; }

        return products.filter(item => item.title.indexOf(keyword) >= 0)
    }
}