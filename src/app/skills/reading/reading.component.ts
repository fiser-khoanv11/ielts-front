import { Component } from '@angular/core';
import { ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdDialog, MdSnackBar } from '@angular/material';

import { GetDataService } from '../../services/get-data.service';
import { GlobalService } from '../../services/global.service';

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

import { CommonComponent } from '../common/common.component';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css'],
  providers: [ GetDataService ]
})
export class ReadingComponent extends CommonComponent {

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

  constructor(private _dialog: MdDialog, private _snackBar: MdSnackBar, 
              private _getDataService: GetDataService, private _activatedRoute: ActivatedRoute,
              private _global: GlobalService) {
    super(_dialog, _snackBar, _getDataService, _activatedRoute, _global);
    this.skill = 'reading';
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

}
