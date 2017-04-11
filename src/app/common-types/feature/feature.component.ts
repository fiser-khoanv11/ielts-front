import { Component, OnInit, Input } from '@angular/core';
import { Type } from '../i-type';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent extends Type {

  private mark: string = 'letter';

  getAnswers(): Array<string> {
    return this.answers;
  }

}
