import { Component, OnInit, Input } from '@angular/core';
import { Type } from '../../common-types/i-type';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent extends Type implements OnInit {

  paras: Array<number> = [];

  ngOnInit() {
    for (let i = 0; i < this.data['number_of_paras']; i++) {
      this.paras.push(i);
    }
  }

  getAnswers() {
    return this.answers;
  }

}
