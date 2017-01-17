import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { IReadingComponent } from '../i-reading/i-reading.component';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit, IReadingComponent {

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
