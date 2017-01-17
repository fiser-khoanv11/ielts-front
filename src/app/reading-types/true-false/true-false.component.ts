import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { IReadingComponent } from '../i-reading/i-reading.component';

@Component({
  selector: 'app-true-false',
  templateUrl: './true-false.component.html',
  styleUrls: ['./true-false.component.css']
})
export class TrueFalseComponent implements OnInit, IReadingComponent {

  @Input() data: Object;
  @Input() sectionNumber: number;
  options: string[];
  answers: string[] = [];

  constructor() { }

  ngOnInit() {
    if (this.data['options'] == 'tf') {
      this.options = [ 'true', 'false', 'not given' ];
    } else if (this.data['options'] == 'yn') {
      this.options = [ 'yes', 'no', 'not given' ];
    }
  }

  getAnswers() {
    return this.answers;
  }

}
