import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  @Input() data: Object;
  answers: string[] = [];
  choices: string[] = [ 'a', 'b', 'c', 'd' ];

  constructor() { }

  ngOnInit() {
  }

  getAnswers() {
    return this.answers;
  }

}
