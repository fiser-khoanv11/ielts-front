import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ConverterService } from '../../services/converter.service';

@Component({
  selector: 'app-ending',
  templateUrl: './ending.component.html',
  styleUrls: ['./ending.component.css'],
  providers: [ ConverterService ]
})
export class EndingComponent implements OnInit {

  @Input() data: Object;
  answers: number[] = [];
  mark: string = 'letter';

  constructor(private converterService: ConverterService) { }

  ngOnInit() {
  }

  getAnswers() {
    let res: string[] = [];
    for (let i = 0; i < this.answers.length; i++) {
      res[i] = this.converterService.numberToLetter(this.answers[i]);
    }

    return res;
  }

}
