import { Component, OnInit, Input } from '@angular/core';
import { ViewChildren, QueryList } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';

import { GetDataService } from '../../services/get-data.service';
import { ConverterService } from '../../services/converter.service';

import { FeatureComponent } from '../../common-types/feature/feature.component';
import { MultipleComponent } from '../../common-types/multiple/multiple.component';
import { NoteComponent } from '../../common-types/note/note.component';
import { SingleComponent } from '../../common-types/single/single.component';
import { TableComponent } from '../../common-types/table/table.component';

import { AnswerComponent } from '../../reading-types/answer/answer.component';
import { EndingComponent } from '../../reading-types/ending/ending.component';
import { HeadingComponent } from '../../reading-types/heading/heading.component';
import { InformationComponent } from '../../reading-types/information/information.component';
import { SentenceComponent } from '../../reading-types/sentence/sentence.component';
import { SummarySelectComponent } from '../../reading-types/summary-select/summary-select.component';
import { TrueFalseComponent } from '../../reading-types/true-false/true-false.component';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.dialog.html',
  styleUrls: ['./submit.dialog.css'],
  providers: [ ConverterService ]
})
export class SubmitDialog implements OnInit {

  answers: Array<Object>;
  keys: Array<Object>;
  testResult: {result: Array<boolean>, noOfCorrect: number, score: number};
  isSubmited: boolean;
  isTimeout: boolean;

  constructor(private dialogRef: MdDialogRef<any>, private converterService: ConverterService) { }

  ngOnInit() {
    this.answers = this.dialogRef.config.data.answers;
    this.keys = this.dialogRef.config.data.keys;
    this.isSubmited = this.dialogRef.config.data.isSubmited;
    this.isTimeout = this.dialogRef.config.data.isTimeout;
    this.testResult = this.converterService.getTestResult(this.answers, this.keys);

    if (this.isTimeout) {
      this.submit();
    }
  }

  ngOnDestroy() {
    this.dialogRef.close(this.isSubmited);
  }

  submit() {
    this.isSubmited = true;
  }

}

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css'],
  providers: [ GetDataService ]
})
export class ReadingComponent implements OnInit {

  @ViewChildren(FeatureComponent) featureComponents: QueryList<FeatureComponent>;
  @ViewChildren(MultipleComponent) multipleComponents: QueryList<MultipleComponent>;
  @ViewChildren(NoteComponent) summaryComponents: QueryList<NoteComponent>;
  @ViewChildren(SingleComponent) singleComponents: QueryList<SingleComponent>;
  @ViewChildren(TableComponent) tableComponents: QueryList<TableComponent>;
  
  @ViewChildren(TrueFalseComponent) trueFalseComponents: QueryList<TrueFalseComponent>;
  @ViewChildren(AnswerComponent) answerComponents: QueryList<AnswerComponent>;
  @ViewChildren(HeadingComponent) headingComponents: QueryList<HeadingComponent>;
  @ViewChildren(SummarySelectComponent) summarySelectComponents: QueryList<SummarySelectComponent>;
  @ViewChildren(EndingComponent) endingComponents: QueryList<EndingComponent>;
  @ViewChildren(InformationComponent) informationComponents: QueryList<InformationComponent>;
  @ViewChildren(SentenceComponent) sentenceComponents: QueryList<SentenceComponent>;

  data: Object[] = [];
  keys: Object[] = [];
  isSubmited: boolean = false;
  timer: number = 3600; //3600

  constructor(private dialog: MdDialog, private snackBar: MdSnackBar, private getDataService: GetDataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];

    this.getDataService.getReadingOffline(id).then(result => {
      console.warn(result);
      this.data = result['content'];
      this.keys = result['keys'];

      if (this.keys.length != 40) {
        console.error('keys.length <> 40');
      }
    });

    this.setTimer();
  }

  setTimer(): void {
    let setting = setInterval(() => {
      this.timer --;

      if (this.timer == 1800) {
        this.snackBar.open('30 minutes left!', 'OK', { duration: 2000 });
      } else if (this.timer == 600) {
        this.snackBar.open('10 minutes left!', 'OK', { duration: 2000 });
      } else if (this.timer <= 0) {
        clearInterval(setting);
        this.viewSheet(true);
      }
    }, 1); // 1000
  }

  getAnswers(): Array<Object> {
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

    // Lay du lieu
    let overall: Array<Object> = [];
    for (let i = 0; i < arr.length; i++) {
      let data = arr[i].getAnswers();
      for (let t = 0; t <= arr[i].data.last - arr[i].data.first; t++) {
        overall.push({
          no: arr[i].data.first + t,
          ans: data[t]
        });
      }
    }

    // Sap xep lai
    overall.sort(this.compare);

    if (overall.length != 40) {
      console.error('overall.length != 40');
    }

    return overall;
  }

  viewSheet(isTimeout: boolean): void {
    let overall = this.getAnswers();

    // Mo dialog
    let dialogRef = this.dialog.open(SubmitDialog, { 
      width: '600px',
      data: {
        answers: overall,
        keys: this.keys,
        isSubmited: this.isSubmited,
        isTimeout: isTimeout
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isSubmited = result;
    });
  }

  compare(a: Object, b: Object): number {
    if (a['no'] < b['no']) return -1;
    if (a['no'] > b['no']) return 1;
    return 0;
  }

}
