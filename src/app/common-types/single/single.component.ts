import { Component, OnInit, Input } from '@angular/core';
import { Type } from '../i-type';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent extends Type {

  getAnswers(): Array<string> {
    return this.answers;
  }

}