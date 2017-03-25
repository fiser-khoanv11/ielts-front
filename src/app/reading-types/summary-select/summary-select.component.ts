import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ConverterService } from '../../services/converter.service';

@Component({
  selector: 'app-summary-select',
  templateUrl: './summary-select.component.html',
  styleUrls: ['./summary-select.component.css'],
  providers: [ ConverterService ]
})
export class SummarySelectComponent implements OnInit {

  @Input() data: Object;
  displayParas: Array<Array<Object>> = [];
  answers: Array<Array<number>> = [];
  mark: string = 'letter';

  constructor(private converterService: ConverterService) { }

  ngOnInit() {
    let paras = this.data['paras'];
    this.displayParas = this.converterService.paragraphToArray(paras, this.data['first']);
    
    for (let i = 0; i < paras.length; i++) {
      this.answers[i] = [];
    }
  }

  getAnswerArray(): Array<number> {
    let array: number[] = [];

    for (let i = 0; i < this.answers.length; i++) {
      for (let j = 0; j < this.answers[i].length; j++) {
        if (this.answers[i][j] != undefined) {
          array.push(this.answers[i][j]);
        }
      }
    }

    return array;
  }

  getAnswers() {
    let res: string[] = [];
    for (let i = 0; i < this.displayParas.length; i++) {
      for (let j = 0; j < this.displayParas[i].length; j++) {
        if (this.displayParas[i][j]['isInput']) {
          res.push(this.converterService.numberToLetter(this.answers[i][j]));
        }
      }
    }

    return res;
  }

}
