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

    return null;
  }

  numberToRoman(value: number): string {
    switch (value) {
      case 1: return 'i';
      case 2: return 'ii';
      case 3: return 'iii';
      case 4: return 'iv';
      case 5: return 'v';
      case 6: return 'vi';
      case 7: return 'vii';
      case 8: return 'viii';
      case 9: return 'xi';
      case 10: return 'x';
      case 11: return 'xi';
      case 12: return 'xii';
    }

    return null;
  }

  paragraphToArray(paragraphs: Array<string>, first: number): Array<Array<Object>> {
    let result: Array<Array<Object>> = [];

    for (let i = 0; i < paragraphs.length; i++) {
      result[i] = [];
      let paragraph: string = paragraphs[i];

      while (paragraph.includes('[]')) {
        paragraph = paragraph.replace('[]', '*{}*');
      }

      let splitedPara: Array<string> = paragraph.split('*');
      
      for (let j = 0; j < splitedPara.length; j++) {
        if (splitedPara[j] == '{}') {
          result[i].push({ isInput: true, data: first });
          first++;
        } else {
          result[i].push({ isInput: false, data: splitedPara[j] });
        }
      }
    }

    // console.warn(result);
    return result;
  }
}
