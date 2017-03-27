import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';

import { GetDataService } from '../../services/get-data.service';
import { ConverterService } from '../../services/converter.service';

import { FeatureComponent } from '../../common-types/feature/feature.component';
import { MultipleComponent } from '../../common-types/multiple/multiple.component';
import { NoteComponent } from '../../common-types/note/note.component';
import { SingleComponent } from '../../common-types/single/single.component';
import { TableComponent } from '../../common-types/table/table.component';

import { SubmitDialog } from '../dialogs/submit.dialog'

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css'],
  providers: [ GetDataService ]
})
export class CommonComponent implements OnInit {

  @ViewChildren(FeatureComponent) featureComponents: QueryList<FeatureComponent>;
  @ViewChildren(MultipleComponent) multipleComponent: QueryList<MultipleComponent>;
  @ViewChildren(NoteComponent) noteComponent: QueryList<NoteComponent>;
  @ViewChildren(SingleComponent) singleComponent: QueryList<SingleComponent>;
  @ViewChildren(TableComponent) tableComponent: QueryList<TableComponent>;

  data: Object[] = [];
  keys: Object[] = [];
  isSubmited: boolean = false;
  displayParas: Array<Array<Array<string>>> = [];
  testId: number;
  skill: string;
  timer: number = 3600;

  constructor(private dialog: MdDialog, private snackBar: MdSnackBar, private getDataService: GetDataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.skill + 'hey');
    this.testId = this.activatedRoute.snapshot.params['testId'];

    this.getDataService.findOne(this.testId, this.skill).then(result => {
      this.data = result['sections'];
      this.keys = result['keys'];

      if (this.keys.length != 40) {
        console.error('keys.length <> 40');
      }
    });

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
    arr = arr.concat(this.multipleComponent.toArray());
    arr = arr.concat(this.noteComponent.toArray());
    arr = arr.concat(this.singleComponent.toArray());
    arr = arr.concat(this.tableComponent.toArray());

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
    console.log(JSON.stringify(overall) + ' ' + overall.length);

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
