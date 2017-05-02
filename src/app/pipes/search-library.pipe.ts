import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchLibrary',
  pure: false
})
export class SearchLibraryPipe implements PipeTransform {

  transform(items: Array<string>, searchString: string): Array<string> {
    if (!searchString) return items;

    let result: Array<string> = [];
    for (let i = 0; i < items.length; i++) {
      if ((items[i] + '').toLowerCase().indexOf(searchString.toLowerCase()) >= 0) {
        result.push(items[i]);
      }
    }

    return result;
  }

}
