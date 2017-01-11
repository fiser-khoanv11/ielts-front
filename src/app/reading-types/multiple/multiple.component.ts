import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.css']
})
export class MultipleComponent implements OnInit {

  @Input() data: Object;
  answers: string[] = [];
  firstChar: string;
  lastChar: string;
  numberOfChecked: number;

  constructor(public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.firstChar = this.data['choices'][0].char;
    let length = this.data['choices'].length;
    this.lastChar = this.data['choices'][length - 1].char;
  }

  checkLimit(): void {
    let count = 0;

    for (let i = 0; i < this.answers.length; i++) {
      if (this.answers[i]) {
        count++;
      }
    }

    if (this.numberOfChecked == this.data['limit'] && count == this.data['limit'] + 1) {
      console.warn('Limit');
      this.snackBar.open('Be careful with the choice limit!', 'OK', {
        duration: 2000
      });
    }

    this.numberOfChecked = count;
  }

  getAnswers() {
    let res: string[] = [];
    for (let i = 0; i < this.answers.length; i++) {
      if (this.answers[i]) {
        res.push(this.data['choices'][i].char);
      }
    }
    console.log(res);
    return res;
  }

}
