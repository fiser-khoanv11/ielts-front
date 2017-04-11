import { Input, OnInit } from '@angular/core';

class Data {
  first: number;
  last: number;
}

export abstract class Type implements OnInit {

  @Input() data: Data;
  answers: string[] = [];

  constructor() {}

  ngOnInit() {}

  abstract getAnswers(): Array<string>;

  getFirst(): number {
    return this.data.first;
  }

  getLast(): number {
    return this.data.last;
  }

}
