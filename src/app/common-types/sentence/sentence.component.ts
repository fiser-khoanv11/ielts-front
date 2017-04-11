import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Type } from '../i-type';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.css']
})
export class SentenceComponent extends Type implements OnInit {

  displaySens: Array<Array<Object>> = [];

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

  getAnswers(): Array<string> {
    return this.answers;
  }

}
