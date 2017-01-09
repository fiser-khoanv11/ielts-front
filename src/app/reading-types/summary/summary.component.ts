import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  
  @Input() data: Object;
  displayParas: Array<Array<Object>> = [];
  answers: Object[] = [];

  constructor() { }

  ngOnInit() {
    let first = this.data['first'];
    let paras = this.data['paras'];
    
    for (let i = 0; i < paras.length; i++) {
      let para = paras[i];
      while (para.includes('[]')) {
        para = para.replace('[]', '*{}*');
      }

      let tempDisplayPara = para.split('*');
      for (let j = 0; j < tempDisplayPara.length; j++) {
        if (tempDisplayPara[j] == '{}') {
          tempDisplayPara[j] = { isInput: true, data: first };
          first++;
        } else {
          tempDisplayPara[j] = { isInput: false, data: tempDisplayPara[j] };
        }
      }

      this.displayParas[i] = tempDisplayPara;

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
