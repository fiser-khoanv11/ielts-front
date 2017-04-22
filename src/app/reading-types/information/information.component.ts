import { Component, OnInit, Input } from '@angular/core';
import { Type } from '../../common-types/i-type';
import { ConverterService } from '../../services/converter.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
  providers: [ ConverterService ]
})
export class InformationComponent extends Type implements OnInit {

  @Input() sectionNumber: number;
  paras = [];

  constructor(private converterService: ConverterService) {
    super();
  }

  ngOnInit() {
    for (let i = 0; i < this.data['number_of_paras']; i++) {
      this.paras.push(this.converterService.numberToLetter(i + 1));
    }
  }

  getAnswers() {
    return this.answers;
  }

}
