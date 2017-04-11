import { Component, OnInit, Input } from '@angular/core';
import { ConverterService } from '../../services/converter.service';
import { Type } from '../i-type';

class DisplaySpan {
  isInput: boolean;
  data: any;
}

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  providers: [ ConverterService ]
})
export class NoteComponent extends Type implements OnInit {

  displayParas: Array<Array<DisplaySpan>> = [];
  _answers: Object[] = [];

  constructor(private converterSv: ConverterService) {
    super();
  }

  ngOnInit() {
    let paras = this.data['paras'];
    this.displayParas = this.converterSv.paragraphToArray(paras, this.data['first']);

    for (let i = 0; i < paras.length; i++) {
      this._answers[i] = [];
    }
  }

  getAnswers(): Array<string> {
    this.answers = [];

    for (let i = 0; i < this.displayParas.length; i++) {
      for (let j = 0; j < this.displayParas[i].length; j++) {
        if (this.displayParas[i][j].isInput) {
          this.answers.push(this._answers[i][j]);
        }
      }
    }

    return this.answers;
  }

}
