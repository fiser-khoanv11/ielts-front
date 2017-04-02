import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdDialog, MdSnackBar } from '@angular/material';

import { GetDataService } from '../../services/get-data.service';
import { ConverterService } from '../../services/converter.service';

import { AnswerComponent } from '../../common-types/answer/answer.component';
import { FeatureComponent } from '../../common-types/feature/feature.component';
import { MultipleComponent } from '../../common-types/multiple/multiple.component';
import { NoteComponent } from '../../common-types/note/note.component';
import { SingleComponent } from '../../common-types/single/single.component';
import { TableComponent } from '../../common-types/table/table.component';

import { EndingComponent } from '../../reading-types/ending/ending.component';
import { HeadingComponent } from '../../reading-types/heading/heading.component';
import { InformationComponent } from '../../reading-types/information/information.component';
import { SentenceComponent } from '../../reading-types/sentence/sentence.component';
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
  @ViewChildren(SingleComponent) singleComponent: QueryList<SingleComponent>;
  @ViewChildren(TableComponent) tableComponent: QueryList<TableComponent>;

  @ViewChildren(TrueFalseComponent) trueFalseComponents: QueryList<TrueFalseComponent>;
  @ViewChildren(HeadingComponent) headingComponents: QueryList<HeadingComponent>;
  @ViewChildren(SummarySelectComponent) summarySelectComponents: QueryList<SummarySelectComponent>;
  @ViewChildren(EndingComponent) endingComponents: QueryList<EndingComponent>;
  @ViewChildren(InformationComponent) informationComponents: QueryList<InformationComponent>;
  @ViewChildren(SentenceComponent) sentenceComponents: QueryList<SentenceComponent>;

  sections: Object[] = [];
  keys: Object[] = [];
  isSubmited: boolean = false;
  testId: number;
  skill: string;
  timer: number = 3600;

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

  setTimer(): void {
    // let setting = setInterval(() => {
    //   this.timer --;

    //   if (this.timer == 1800) {
    //     this.snackBar.open('30 minutes left!', 'OK', { duration: 2000 });
    //   } else if (this.timer == 600) {
    //     this.snackBar.open('10 minutes left!', 'OK', { duration: 2000 });
    //   } else if (this.timer <= 0) {
    //     clearInterval(setting);
    //     this.viewSheet(true);
    //   }
    // }, 1);
  }

  getAnswers(): Array<Object> {
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
    let _data = {
      answers: this.getAnswers(),
      keys: this.keys,
      isSubmited: this.isSubmited,
      // isTimeout: isTimeout,
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
