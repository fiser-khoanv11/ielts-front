import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchLibraryTwo'
})
export class SearchLibraryTwoPipe implements PipeTransform {

  transform(items: Array<Object>, title: string): Array<Object> {
    if (!title) return null;

    let result: Array<Object> = [];
    for (let i = 0; i < items.length; i++) {
      if ((items[i]['book_title'] + '').indexOf(title) >= 0) {
        result.push(items[i]);
      }
    }

    return result;
  }

}
