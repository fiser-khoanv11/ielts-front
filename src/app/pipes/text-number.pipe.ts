import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textNumber'
})
export class TextNumberPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    switch (value) {
      case 1: return 'one';
      case 2: return 'two';
      case 3: return 'three';
      case 4: return 'four';
      case 5: return 'five';
    }

    return 'n';
  }

}
