import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  @Input() data: Object;
  @Input() sectionNumber: number;
  answers: number[] = [];

  constructor() { }

  ngOnInit() {
    let first = this.data['first'];

    for (let i = 0; i < this.data['paras'].length; i++) {
      if (this.data['paras'][i]['answer'] == undefined) {
        this.data['paras'][i]['no'] = first;
        first++;
      }
    }
  }

  changeColor(v: number): boolean {
    for (let i = 0; i < this.data['paras'].length; i++) {
      if (this.data['paras'][i]['answer'] == v) return true;
    }

    if (this.answers.indexOf(v) >= 0) return true;
    return false;
  }

  checkDuplicated(v: number): boolean {
    let array: number[] = [];

    for (let i = 0; i < this.data['paras'].length; i++) {
      let answer = this.data['paras'][i]['answer'];
      if (answer != undefined) {
        array.push(answer);
      }
    }

    for (let i = 0; i < this.answers.length; i++) {
      array.push(this.answers[i]);
    }

    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] == v) {
        count ++;
        if (count >= 2) return true;
      }
    }

    return false;
  }

  getAnswers() {
    return this.answers;
  }

}
