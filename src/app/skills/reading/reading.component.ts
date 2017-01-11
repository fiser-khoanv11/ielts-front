import { Component, OnInit } from '@angular/core';
import { ViewChildren, QueryList } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { TrueFalseComponent } from '../../reading-types/true-false/true-false.component';
import { AnswerComponent } from '../../reading-types/answer/answer.component';
import { HeadingComponent } from '../../reading-types/heading/heading.component';
import { MultipleComponent } from '../../reading-types/multiple/multiple.component';
import { SingleComponent } from '../../reading-types/single/single.component';
import { SummaryComponent } from '../../reading-types/summary/summary.component';
import { EndingComponent } from '../../reading-types/ending/ending.component';

import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css'],
  providers: [ GetDataService ]
})
export class ReadingComponent implements OnInit {
  @ViewChildren(TrueFalseComponent) trueFalseComponents: QueryList<TrueFalseComponent>;
  @ViewChildren(AnswerComponent) answerComponents: QueryList<AnswerComponent>;
  @ViewChildren(HeadingComponent) headingComponents: QueryList<HeadingComponent>;
  @ViewChildren(MultipleComponent) multipleComponents: QueryList<MultipleComponent>;
  @ViewChildren(SingleComponent) singleComponents: QueryList<SingleComponent>;
  @ViewChildren(SummaryComponent) summaryComponents: QueryList<SummaryComponent>;
  @ViewChildren(EndingComponent) endingComponents: QueryList<EndingComponent>;

  data: Object[];

  constructor(private router: Router, private getDataService: GetDataService) { }

  ngOnInit() {
    this.data = this.getDataService.getDataForEachType();
  }

  getAnswers(): Object {
    let arr = [];
    arr = arr.concat(this.trueFalseComponents.toArray());
    arr = arr.concat(this.answerComponents.toArray());
    arr = arr.concat(this.headingComponents.toArray());
    arr = arr.concat(this.multipleComponents.toArray());
    arr = arr.concat(this.singleComponents.toArray());
    arr = arr.concat(this.summaryComponents.toArray());
    arr = arr.concat(this.endingComponents.toArray());

    let answers: Object[] = [];
    for (let i = 0; i < arr.length; i++) {
      answers.push({
        type: arr[i].data.type,
        answers: arr[i].getAnswers()
      });
    }

    console.log('ok here');
    console.log(answers);
    console.log(JSON.stringify(answers));
    // this.router.navigate(['/result', answers]);

    return null;
  }

}
