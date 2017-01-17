import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ConverterService } from '../../services/converter.service';
import { IReadingComponent } from '../i-reading/i-reading.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  providers: [ ConverterService ]
})
export class SummaryComponent implements OnInit, IReadingComponent {
  
  @Input() data: Object;
  displayParas: Array<Array<Object>> = [];
  answers: Object[] = [];

  constructor(private converterService: ConverterService) { }

  ngOnInit() {
    let paras = this.data['paras'];
    this.displayParas = this.converterService.paragraphToArray(paras, this.data['first']);

    for (let i = 0; i < paras.length; i++) {
      this.answers[i] = [];
    }
  }

  getAnswers() {
    let res: string[] = [];
    for (let i = 0; i < this.displayParas.length; i++) {
      for (let j = 0; j < this.displayParas[i].length; j++) {
        if (this.displayParas[i][j]['isInput']) {
          res.push(this.answers[i][j]);
        }
      }
    }

    return res;
  }

}
