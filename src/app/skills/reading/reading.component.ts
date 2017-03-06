import { Component, OnInit, Input } from '@angular/core';
import { ViewChildren, QueryList } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';

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
import { TableComponent } from '../../reading-types/table/table.component';

import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.dialog.html',
  styleUrls: ['./submit.dialog.css'],
})
export class SubmitDialog implements OnInit {

  answers: Array<Object>;

  constructor(private dialogRef: MdDialogRef<any>) { }

  ngOnInit() {
    this.answers = this.dialogRef.config.data.answers;
    console.log(this.answers);
  }
}

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
  @ViewChildren(TableComponent) tableComponents: QueryList<TableComponent>;

  data: Object[] = [];
  displayParas: Array<Array<Array<string>>> = [];
  // color = { first: 5, last: 7 };

  constructor(private dialog: MdDialog, private getDataService: GetDataService) { }

  ngOnInit() {
    this.getDataService.getReadOffline().then(result => {
      this.data = result;

      for (let i = 0; i < this.data.length; i++) {
        let paras = this.data[i]['passage']['paras'];
        for (let j = 0; j < paras.length; j++) {
          paras[j]['highlight'] = [];
        }
      }

      console.log(this.data);
    });
  }

  test() {
    this.data = [];
  }

  viewSheet(): Object {
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
    arr = arr.concat(this.tableComponents.toArray());

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
      // let t = 0;
      let data = arr[i].getAnswers();
      for (let t = 0; t <= arr[i].data.last - arr[i].data.first; t++) {
        overall.push({
          no: arr[i].data.first + t,
          ans: data[t]
        });
      }
    }

    console.log(answers);
    // console.log(JSON.stringify(answers));
    console.log(JSON.stringify(overall.sort(this.compare)));

    this.dialog.open(SubmitDialog, { 
      // height: '400px',
      width: '600px',
      data: {
        answers: overall
      }
    });

    return null;
  }

  compare(a: Object, b: Object): number {
    if (a['no'] < b['no']) return -1;
    if (a['no'] > b['no']) return 1;
    return 0;
  }

  // getChosenText() {
  //   console.log(window.getSelection());
  //   let toString = window.getSelection().toString();
  //   let wholeString = window.getSelection().anchorNode['data'];
  //   let first = window.getSelection().anchorOffset;
  //   let last = window.getSelection().focusOffset;
  //   // console.log(toString);
  //   // console.log(wholeString);
  //   // console.log(first);
  //   // console.log(last);

  //   // HERE
  //   // console.warn(this.data);
  //   for (let i = 0; i < this.data.length; i++) {
  //     let paras = this.data[i]['passage']['paras'];
  //     for (let j = 0; j < paras.length; j++) {
  //       // console.log('here');
  //       let para = paras[j];
  //       // console.log(para);
  //       // for (let t = 0; t < para['content']; t++) {
  //       if (para['content'] == wholeString) {
  //         // para
  //         // console.warn('okeeeeeee');        
  //         let tempPara = para['highlight'].slice();
  //         tempPara.push({ first: first, last: last });
  //         para['highlight'] = tempPara;
  //         break;
  //       }
        
  //       // paras[j]['content'] = [ {color: 'pink', text: paras[j]['content']} ];
  //     }
  //   }

  //   console.log(this.data[0]);
  // }

}
