import { Pipe, PipeTransform, Injectable } from '@angular/core';

import { Product } from '../model/Product';

@Pipe({
    name: 'productFilter',
    pure: false
})
@Injectable()
export class ProductFilterPipe implements PipeTransform {
    transform(products: Product[], keyword: string): any {
        if (!products) { return []; }

        return products.filter(item => item.state.indexOf(keyword) >= 0)
    }
}