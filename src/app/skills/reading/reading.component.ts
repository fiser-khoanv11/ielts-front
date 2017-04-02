import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdDialog, MdSnackBar } from '@angular/material';

import { GetDataService } from '../../services/get-data.service';
import { GlobalService } from '../../services/global.service';

import { CommonComponent } from '../common/common.component';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['../common/common.component.css', './reading.component.css'],
  providers: [ GetDataService ]
})
export class ReadingComponent extends CommonComponent {

  constructor(private _dialog: MdDialog, private _snackBar: MdSnackBar, 
              private _getDataService: GetDataService, private _activatedRoute: ActivatedRoute) {
    super(_dialog, _snackBar, _getDataService, _activatedRoute);
    this.skill = 'reading';
  }

}
