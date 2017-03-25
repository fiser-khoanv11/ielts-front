import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() data: Object;
  answers: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  getAnswers() {
    return this.answers;
  }

}
