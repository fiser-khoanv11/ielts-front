import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css'],
  providers: [ GetDataService ]
})
export class WritingComponent implements OnInit {

  constructor(private getDataService: GetDataService, private route: ActivatedRoute) { }

  data: Object;
  testId: number;

  ngOnInit() {
    this.testId = this.route.snapshot.params['testId'];

    this.getDataService.getWriteOffline().then(result => {
      this.data = result;

      console.log(this.data);
    });
  }

}
