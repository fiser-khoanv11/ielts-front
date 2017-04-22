import { Component, OnInit, Input } from '@angular/core';
import { Type } from '../../common-types/i-type';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent extends Type implements OnInit {

  mark: string = 'roman';

  ngOnInit() {
    let count = 0;

    for (let i = 0; i < this.data['paras'].length; i++) {
      if (this.data['paras'][i].answer == undefined) {
        this.data['paras'][i].no = count;
        count++;
      }
    }
  }

  getAnswerArray(): Array<string> {
    let array: Array<string> = this.answers.slice(0);

    for (let i = 0; i < this.data['paras'].length; i++) {
      let a = this.data['paras'][i].answer;
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
