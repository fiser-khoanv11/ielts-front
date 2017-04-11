import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdDialog, MdSnackBar } from '@angular/material';

import { GetDataService } from '../../services/get-data.service';

import { AnswerComponent } from '../../common-types/answer/answer.component';
import { FeatureComponent } from '../../common-types/feature/feature.component';
import { MultipleComponent } from '../../common-types/multiple/multiple.component';
import { NoteComponent } from '../../common-types/note/note.component';
import { SentenceComponent } from '../../common-types/sentence/sentence.component';
import { SingleComponent } from '../../common-types/single/single.component';
import { TableComponent } from '../../common-types/table/table.component';

import { EndingComponent } from '../../reading-types/ending/ending.component';
import { HeadingComponent } from '../../reading-types/heading/heading.component';
import { InformationComponent } from '../../reading-types/information/information.component';
import { SummarySelectComponent } from '../../reading-types/summary-select/summary-select.component';
import { TrueFalseComponent } from '../../reading-types/true-false/true-false.component';

import { SubmitDialog } from '../dialogs/submit.dialog'

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css'],
  providers: [ GetDataService ]
})
export class CommonComponent implements OnInit {

  @ViewChildren(AnswerComponent) answerComponents: QueryList<AnswerComponent>;
  @ViewChildren(FeatureComponent) featureComponents: QueryList<FeatureComponent>;
  @ViewChildren(MultipleComponent) multipleComponent: QueryList<MultipleComponent>;
  @ViewChildren(NoteComponent) noteComponent: QueryList<NoteComponent>;
  @ViewChildren(SentenceComponent) sentenceComponents: QueryList<SentenceComponent>;
  @ViewChildren(SingleComponent) singleComponent: QueryList<SingleComponent>;
  @ViewChildren(TableComponent) tableComponent: QueryList<TableComponent>;

  @ViewChildren(TrueFalseComponent) trueFalseComponents: QueryList<TrueFalseComponent>;
  @ViewChildren(HeadingComponent) headingComponents: QueryList<HeadingComponent>;
  @ViewChildren(SummarySelectComponent) summarySelectComponents: QueryList<SummarySelectComponent>;
  @ViewChildren(EndingComponent) endingComponents: QueryList<EndingComponent>;
  @ViewChildren(InformationComponent) informationComponents: QueryList<InformationComponent>;

  

  sections: Object[];
  keys: Object[] = [];
  isSubmited: boolean = false;
  testId: number;
  skill: string;
  timeLeft: number = 3600;
  timer;

  constructor(private dialog: MdDialog, private snackBar: MdSnackBar, 
              private getDataService: GetDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.testId = this.route.snapshot.params['testId'];

    this.getDataService.findOne(this.testId, this.skill).then(
      (value: any) => {
        this.sections = value['sections'];
        this.keys = value['keys'];

        if (this.keys.length != 40) console.error('keys.length <> 40');
      },
      (reason: any) => console.error(reason)
    );

    this.setTimer();
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  setTimer(): void {
    this.timer = setInterval(() => {
      this.timeLeft --;

      if (this.timeLeft == 1800) {
        this.snackBar.open('30 minutes left!', 'OK', { duration: 2000 });
      } else if (this.timeLeft == 600) {
        this.snackBar.open('10 minutes left!', 'OK', { duration: 2000 });
      } else if (this.timeLeft <= 0) {
        clearInterval(this.timer);
        this.dialog.closeAll();
        this.viewSheet(true);
      }
    }, 1000);
  }

  getAllAnswers(): Array<Object> {
    let arr = [];
    arr = arr.concat(this.answerComponents.toArray());
    arr = arr.concat(this.featureComponents.toArray());
    arr = arr.concat(this.multipleComponent.toArray());
    arr = arr.concat(this.noteComponent.toArray());
    arr = arr.concat(this.singleComponent.toArray());
    arr = arr.concat(this.tableComponent.toArray());

    arr = arr.concat(this.trueFalseComponents.toArray());
    arr = arr.concat(this.headingComponents.toArray());
    arr = arr.concat(this.summarySelectComponents.toArray());
    arr = arr.concat(this.endingComponents.toArray());
    arr = arr.concat(this.informationComponents.toArray());
    arr = arr.concat(this.sentenceComponents.toArray());    

    // Lay du lieu
    let all: Array<Object> = [];
    for (let i = 0; i < arr.length; i++) {
      let answers = arr[i].getAnswers();
      for (let t = 0; t <= arr[i].getLast() - arr[i].getFirst(); t++) {
        all.push({
          no: arr[i].getFirst() + t,
          ans: answers[t]
        });
      }
    }

    // Sap xep lai
    all.sort(this.compare);

    if (all.length != 40) {
      console.error('Number of questions is not 40!');
    }

    return all;
  }

  viewSheet(isBecauseOfTimingOut): void {
    let _data = {
      answers: this.getAllAnswers(),
      keys: this.keys,
      isSubmited: this.isSubmited,
      isBecauseOfTimingOut: isBecauseOfTimingOut,
      skill: this.skill,
      testId: this.testId
    }

    // Mo dialog
    let dialogRef = this.dialog.open(SubmitDialog, { 
      width: '600px',
      data: {
        data: _data
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
