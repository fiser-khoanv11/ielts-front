import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roman'
})
export class RomanPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    let result = '';

    switch (value) {
      case 1: return 'i';
      case 2: return 'ii';
      case 3: return 'iii';
      case 4: return 'iv';
      case 5: return 'v';
      case 6: return 'vi';
      case 7: return 'vii';
      case 8: return 'viii';
      case 9: return 'ix';
      case 10: return 'x';
      case 11: return 'xi';
    }

    return 'n';
  }

}
