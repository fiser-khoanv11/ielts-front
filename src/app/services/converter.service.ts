import { Injectable } from '@angular/core';

@Injectable()
export class ConverterService {

  constructor() { }

  numberToLetter(value: number): string {
    switch (value) {
      case 1: return 'a';
      case 2: return 'b';
      case 3: return 'c';
      case 4: return 'd';
      case 5: return 'e';
      case 6: return 'f';
      case 7: return 'g';
      case 8: return 'h';
      case 9: return 'i';
      case 10: return 'j';
    }

    return 'nan';
  }
}
