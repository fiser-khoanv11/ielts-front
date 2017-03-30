import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdDialog, MdSnackBar } from '@angular/material';

import { GetDataService } from '../../services/get-data.service';
import { ConverterService } from '../../services/converter.service';
import { GlobalService } from '../../services/global.service';

import { CommonComponent } from '../common/common.component';

@Component({
  selector: 'app-listening',
  templateUrl: './listening.component.html',
  styleUrls: ['./listening.component.css'],
  providers: [ GetDataService, ConverterService ]
})
export class ListeningComponent extends CommonComponent {

  constructor(private _dialog: MdDialog, private _snackBar: MdSnackBar,
              private _getDataService: GetDataService, private _activatedRoute: ActivatedRoute,
              private _global: GlobalService) {
    super(_dialog, _snackBar, _getDataService, _activatedRoute, _global);
    this.skill = 'listening';
  }

}
