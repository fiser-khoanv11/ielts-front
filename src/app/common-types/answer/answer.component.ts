import { Component, OnInit, Input } from '@angular/core';
import { Type } from '../i-type';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent extends Type {

  getAnswers(): Array<string> {
    return this.answers;
  }

}
