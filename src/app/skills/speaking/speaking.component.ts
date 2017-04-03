import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';

import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-speaking',
  templateUrl: './speaking.component.html',
  styleUrls: ['../common/common.component.css', './speaking.component.css'],
  providers: [ GetDataService ]
})
export class SpeakingComponent implements OnInit {

  constructor(private getDataService: GetDataService, private route: ActivatedRoute) { }

  data: Object;
  testId: number;

  ngOnInit() {
    this.testId = this.route.snapshot.params['testId'];

    this.getDataService.findOne(this.testId, 'speaking').then(
      (value: any) => {
        this.data = value;
      },
      (reason: any) => console.error(reason)
    );
  }

}
