/*
 *ngFor="let c of oneDimArray | sortBy:'asc'"
 *ngFor="let c of arrayOfObjects | sortBy:'asc':'propertyName'"
*/
import { Pipe, PipeTransform } from '@angular/core';
import { orderBy,sortBy } from 'lodash';

@Pipe({ name: 'sortBy' })
export class SortByCrmPipe implements PipeTransform {

  transform(value: any[], order:any = '', column: string = ''): any[] {
    if (!value || order === '' || !order) { return value; } // no array
    if (!column || column === '') {
      if(order==='asc'){return value.sort()}
      else{return value.sort().reverse();}
    } // sort 1d array
    if (value.length <= 1) { return value; } // array with only one item
    return orderBy(value, [column], [order]);
  }
}
