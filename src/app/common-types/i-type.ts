import { Input, OnInit } from '@angular/core';

class Data {
  first: number;
  last: number;
  type: string;
  directions: Array<string>;
}

export abstract class Type implements OnInit {

  @Input() data: Object;
  answers: string[] = [];
  isError: boolean = false;

  constructor() {}

  ngOnInit() {}

  abstract getAnswers(): Array<string>;

  getFirst(): number {
    console.log('a');
    return this.data['first'];
  }

  getLast(): number {
    return this.data['last'];
  }

}
