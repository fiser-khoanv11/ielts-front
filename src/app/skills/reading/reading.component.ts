import { Component, OnInit } from '@angular/core';
import { ViewChildren, QueryList } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { AnswerComponent } from '../../reading-types/answer/answer.component';
import { EndingComponent } from '../../reading-types/ending/ending.component';
import { FeatureComponent } from '../../reading-types/feature/feature.component';
import { HeadingComponent } from '../../reading-types/heading/heading.component';
import { InformationComponent } from '../../reading-types/information/information.component';
import { MultipleComponent } from '../../reading-types/multiple/multiple.component';
import { SentenceComponent } from '../../reading-types/sentence/sentence.component';
import { SingleComponent } from '../../reading-types/single/single.component';
import { SummaryComponent } from '../../reading-types/summary/summary.component';
import { SummarySelectComponent } from '../../reading-types/summary-select/summary-select.component';
import { TrueFalseComponent } from '../../reading-types/true-false/true-false.component';

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
  @ViewChildren(SummarySelectComponent) summarySelectComponents: QueryList<SummarySelectComponent>;
  @ViewChildren(EndingComponent) endingComponents: QueryList<EndingComponent>;
  @ViewChildren(InformationComponent) informationComponents: QueryList<InformationComponent>;
  @ViewChildren(SentenceComponent) sentenceComponents: QueryList<SentenceComponent>;
  @ViewChildren(FeatureComponent) featureComponents: QueryList<FeatureComponent>;

  data: Object[];

  constructor(private router: Router, private getDataService: GetDataService) { }

  ngOnInit() {
    this.getDataService.getData().then(result => {
      this.data = result;  
    });
  }

  test() {
    this.data = [];
  }

  getAnswers(): Object {
    let arr = [];
    arr = arr.concat(this.trueFalseComponents.toArray());
    arr = arr.concat(this.answerComponents.toArray());
    arr = arr.concat(this.headingComponents.toArray());
    arr = arr.concat(this.multipleComponents.toArray());
    arr = arr.concat(this.singleComponents.toArray());
    arr = arr.concat(this.summaryComponents.toArray());
    arr = arr.concat(this.summarySelectComponents.toArray());
    arr = arr.concat(this.endingComponents.toArray());
    arr = arr.concat(this.informationComponents.toArray());
    arr = arr.concat(this.sentenceComponents.toArray());
    arr = arr.concat(this.featureComponents.toArray());

    let answers: Object[] = [];
    for (let i = 0; i < arr.length; i++) {
      answers.push({
        type: arr[i].data.type,
        first: arr[i].data.first,
        answers: arr[i].getAnswers()
      });
    }

    let overall: Array<Object> = [];
    for (let i = 0; i < arr.length; i++) {
      let t = 0;
      let data = arr[i].getAnswers();
      for (let j = arr[i].data.first; j <= arr[i].data.last; j++) {
        overall.push({
          no: j,
          ans: data[t]
        });

        t++;
      }
    }

    console.log(answers);
    // console.log(JSON.stringify(answers));
    console.log(JSON.stringify(overall.sort(this.compare)));

    return null;
  }

  compare(a: Object, b: Object): number {
    if (a['no'] < b['no']) return -1;
    if (a['no'] > b['no']) return 1;
    return 0;
  }

}
