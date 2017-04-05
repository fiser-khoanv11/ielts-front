import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.css']
})
export class SentenceComponent implements OnInit {

  @Input() data: Object;
  displaySens: Array<Array<Object>> = [];
  answers: string[] = [];

  constructor() { }

  ngOnInit() {
    let sens = this.data['sentences'];
    
    for (let i = 0; i < sens.length; i++) {
      let sen = sens[i];
      while (sen.includes('[]')) {
        sen = sen.replace('[]', '*{}*');
      }

      this.displaySens[i] = sen.split('*');
    }
  }

  getAnswers() {
    return this.answers;
  }

}
