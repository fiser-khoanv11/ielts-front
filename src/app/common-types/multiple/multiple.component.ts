import { Component, OnInit, Input } from '@angular/core';
import { ConverterService } from '../../services/converter.service';
import { MdSnackBar } from '@angular/material';
import { Type } from '../i-type';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.css'],
  providers: [ ConverterService ]
})
export class MultipleComponent extends Type {

  private _answers: boolean[] = [];
  numberOfChecked: number;

  constructor(public snackBar: MdSnackBar, private converterSv: ConverterService) {
    super();
  }

  checkLimit(p): void {
    let count = 0;

    for (let i = 0; i < this._answers.length; i++) {
      if (this._answers[i]) count++;
    }
  }

  getAnswers(): Array<string> {
    this.answers = [];
    for (let i = 0; i < this._answers.length; i++) {
      if (this._answers[i]) {
        this.answers.push(this.converterSv.numberToLetter(i + 1));
      }
    }

    return this.answers;
  }

}
