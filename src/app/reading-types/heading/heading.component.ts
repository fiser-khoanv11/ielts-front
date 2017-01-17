import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { IReadingComponent } from '../i-reading/i-reading.component';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit, IReadingComponent {

  @Input() data: Object;
  @Input() sectionNumber: number;
  answers: Array<number> = [];
  duplicatable: boolean = false;
  mark: string = 'roman';

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

  getAnswerArray(): Array<number> {
    let array: Array<number> = this.answers.slice(0);

    for (let i = 0; i < this.data['paras'].length; i++) {
      let a = this.data['paras'][i]['answer'];
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
