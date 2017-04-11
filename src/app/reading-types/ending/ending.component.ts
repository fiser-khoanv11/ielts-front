import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-ending',
  templateUrl: './ending.component.html',
  styleUrls: ['./ending.component.css']
})
export class EndingComponent implements OnInit {

  @Input() data: Object;
  answers: string[] = [];
  mark: string = 'letter';

  constructor() { }

  ngOnInit() {
  }

  getAnswers() {
   return this.answers;
  }

}
