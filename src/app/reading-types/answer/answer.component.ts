import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { IReadingComponent } from '../i-reading/i-reading.component';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit, IReadingComponent {

  @Input() data: Object;
  answers: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  getAnswers() {
    return this.answers;
  }

}
