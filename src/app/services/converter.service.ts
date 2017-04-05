import { Injectable } from '@angular/core';

@Injectable()
export class ConverterService {

  constructor() { }

  getTestResult(answers: Array<Object>, _keys: Array<Object>): {result: Array<boolean>, noOfCorrect: number, score: number} {
    let result: Array<boolean> = [];
    console.info(JSON.stringify(answers));

    for (let i = 0; i < answers.length && i < _keys.length; i++) {
      let answer = answers[i]['ans'];
      let keys = _keys[i]['keys'];

      result[i] = false;

      for (let j = 0; j < keys.length; j++) {
        if (answer != undefined) {
          answer = answer.trim();
          while (answer.indexOf('  ') >= 0) {
            answer = answer.replace('  ', ' ');
          }
        }
        if (answer == keys[j]) {
          result[i] = true;
          break;
        }
      }
    }

    let count = 0;
    for (let i = 0; i < 40; i++) {
      if (result[i]) count ++;
    }

    return { result: result, noOfCorrect: count, score: this.getReadingScore(count) };
  }

  getReadingScore(n: number) {
    if (n >= 39) return 9;
    if (n >= 37) return 8.5;
    if (n >= 35) return 8;
    if (n >= 33) return 7.5;
    if (n >= 30) return 7;
    if (n >= 27) return 6.5;
    if (n >= 23) return 6;
    if (n >= 19) return 5.5;
    if (n >= 15) return 5;
    if (n >= 13) return 4.5;
    if (n >= 10) return 4;
    if (n >= 8) return 3.5;
    if (n >= 6) return 3;
    return 0;
  }

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

  paragraphToArray(_paragraphs: Array<string>, _first: number): Array<Array<DisplaySpan>> {
    let result: Array<Array<DisplaySpan>> = [];

    for (let i = 0; i < _paragraphs.length; i++) {
      let paragraph: string = _paragraphs[i];
      result[i] = [];

      while (paragraph.includes('[]')) {
        paragraph = paragraph.replace('[]', '*{}*');
      }

      let splitedPara: Array<string> = paragraph.split('*');
      
      for (let j = 0; j < splitedPara.length; j++) {
        if (splitedPara[j] == '{}') {
          result[i].push({ isInput: true, data: _first });
          _first++;
        } else {
          result[i].push({ isInput: false, data: splitedPara[j] });
        }
      }
    }

    return result;
  }
}

class DisplaySpan {
  isInput: boolean;
  data: any;
}
