import { Component, OnInit, Input } from '@angular/core';
import { ViewChildren, QueryList } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';

import { GetDataService } from '../../services/get-data.service';
import { ConverterService } from '../../services/converter.service';

import { FeatureComponent } from '../../common-types/feature/feature.component';
import { MultipleComponent } from '../../common-types/multiple/multiple.component';
import { NoteComponent } from '../../common-types/note/note.component';
import { SingleComponent } from '../../common-types/single/single.component';
import { TableComponent } from '../../common-types/table/table.component';

@Component({
  selector: 'app-listening',
  templateUrl: './listening.component.html',
  styleUrls: ['./listening.component.css'],
  providers: [ GetDataService, ConverterService ]
})
export class ListeningComponent implements OnInit {

  @ViewChildren(FeatureComponent) featureComponents: QueryList<FeatureComponent>;
  @ViewChildren(MultipleComponent) multipleComponent: QueryList<MultipleComponent>;
  @ViewChildren(NoteComponent) noteComponent: QueryList<NoteComponent>;
  @ViewChildren(SingleComponent) singleComponent: QueryList<SingleComponent>;
  @ViewChildren(TableComponent) tableComponent: QueryList<TableComponent>;

  data: Object[] = [];
  keys: Object[] = [];
  isSubmited: boolean = false;
  displayParas: Array<Array<Array<string>>> = [];

  constructor(private dialog: MdDialog, private getDataService: GetDataService, private activatedRoute: ActivatedRoute, private converterService: ConverterService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];

    this.getDataService.getListeningOffline(id).then(result => {
      this.data = result['content'];
      this.keys = result['keys'];

      if (this.keys.length != 40) {
        console.error('keys.length <> 40');
      }
    });
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

  viewSheet(): void {
    console.log(JSON.stringify(this.getAnswers()));
    // let overall = this.getAnswers();

    // // Mo dialog
    // let dialogRef = this.dialog.open(SubmitDialog, { 
    //   width: '600px',
    //   data: {
    //     answers: overall,
    //     keys: this.keys,
    //     isSubmited: this.isSubmited
    //   }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   this.isSubmited = result;
    // });
  }

  compare(a: Object, b: Object): number {
    if (a['no'] < b['no']) return -1;
    if (a['no'] > b['no']) return 1;
    return 0;
  }

}
