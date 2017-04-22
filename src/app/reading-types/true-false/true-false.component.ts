import { Component, OnInit, Input } from '@angular/core';
import { Type } from '../../common-types/i-type';

@Component({
  selector: 'app-true-false',
  templateUrl: './true-false.component.html',
  styleUrls: ['./true-false.component.css']
})
export class TrueFalseComponent extends Type implements OnInit {

  options: string[];

  ngOnInit() {
    if (this.data['options'] == 'tf') {
      this.options = [ 'true', 'false', 'not given' ];
    } else if (this.data['options'] == 'yn') {
      this.options = [ 'yes', 'no', 'not given' ];
    }
  }

  getAnswers() {
    return this.answers;
  }

}
