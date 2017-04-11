import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  @Input() data: Data;
  answers: Array<any> = [];
  mark: string = 'roman';

  constructor() { }

  ngOnInit() {
    let count = 0;

    for (let i = 0; i < this.data.paras.length; i++) {
      if (this.data.paras[i].answer == undefined) {
        this.data.paras[i].no = count;
        count++;
      }
    }
  }

  getAnswerArray(): Array<number> {
    let array: Array<number> = this.answers.slice(0);

    for (let i = 0; i < this.data.paras.length; i++) {
      let a = this.data.paras[i].answer;
      if (a != undefined) {
        array.push(a);
      }
    }

    return array;
  }

  getAnswers() {
    return this.answers;
  }

}

class Data {
  first: number;
  last: number;
  headings: Array<string>;
  paras: Array<{char: string, answer: number, no: number}>;
}
