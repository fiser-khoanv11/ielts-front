import { Component, OnInit, Input } from '@angular/core';
import { Type } from '../../common-types/i-type';

@Component({
  selector: 'app-ending',
  templateUrl: './ending.component.html',
  styleUrls: ['./ending.component.css']
})
export class EndingComponent extends Type {

  mark: string = 'letter';

  getAnswers() {
    return this.answers;
  }

}
