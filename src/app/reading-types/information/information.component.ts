import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ConverterService } from '../../services/converter.service';
import { IReadingComponent } from '../i-reading/i-reading.component';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
  providers: [ ConverterService ]
})
export class InformationComponent implements OnInit, IReadingComponent {

  @Input() data: Object;
  @Input() sectionNumber: number;
  answers: string[] = [];
  paras = [];

  constructor(private converterService: ConverterService) { }

  ngOnInit() {
    for (let i = 0; i < this.data['number_of_paras']; i++) {
      this.paras.push(this.converterService.numberToLetter(i + 1));
    }
  }

  getAnswers() {
    return this.answers;
  }

}
