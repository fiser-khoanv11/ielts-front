import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

export class Data {
  options: string;
}

@Component({
  selector: 'app-true-false',
  templateUrl: './true-false.component.html',
  styleUrls: ['./true-false.component.css']
})
export class TrueFalseComponent implements OnInit {

  @Input() data: Data;
  @Input() sectionNumber: number;
  options: string[];
  answers: string[] = [];

  constructor() { }

  ngOnInit() {
    if (this.data.options == 'tf') {
      this.options = [ 'true', 'false', 'not given' ];
    } else if (this.data.options == 'yn') {
      this.options = [ 'yes', 'no', 'not given' ];
    }
  }

  getAnswers() {
    return this.answers;
  }

}
