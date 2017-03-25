import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ConverterService } from '../../services/converter.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css'],
  providers: [ ConverterService ]
})
export class HeadingComponent implements OnInit {

  @Input() data: Object;
  @Input() sectionNumber: number;
  answers: Array<any> = [];
  duplicatable: boolean = false;
  mark: string = 'roman';

  constructor(private converterService: ConverterService) { }

  ngOnInit() {
    let first = this.data['first'];

    for (let i = 0; i < this.data['paras'].length; i++) {
      if (this.data['paras'][i]['answer'] == undefined) {
        this.data['paras'][i]['no'] = first;
        first++;
      }
    }
  }

  getAnswerArray(): Array<number> {
    let array: Array<number> = this.answers.slice(0);

    for (let i = 0; i < this.data['paras'].length; i++) {
      let a = this.data['paras'][i]['answer'];
      if (a != undefined) {
        array.push(a);
      }
    }

    return array;
  }

  getAnswers() {
    let res: string[] = [];
    
    for (let i = 0; i < this.answers.length; i++) {
      let temp: string = '';
      
      if (this.answers[i]) {
        temp = this.converterService.numberToRoman(this.answers[i]);
      } else {
        temp = undefined;
      }

      res.push(temp);
    }

    return res;
  }

}
