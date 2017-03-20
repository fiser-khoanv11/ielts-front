import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  @Input() data: Object;
  answers: string[] = [];

  constructor() { }

  ngOnInit() {
    let noOfQues = this.data['last'] - this.data['first'] + 1;
    if (this.data['questions'].length != noOfQues) {
      console.error('single :: wrong number of questions, required ' + noOfQues);
    }
  }

  getAnswers() {
    return this.answers;
  }

}
