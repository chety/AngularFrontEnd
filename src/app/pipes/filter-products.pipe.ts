import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from '../models/product';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: ProductModel[], filterText: string): ProductModel[] {
    if (!filterText) {
      return products;
    }
    return products.filter((p:ProductModel) => p.productName.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()))
  }

}
