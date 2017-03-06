import { Component, OnInit } from '@angular/core';

import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css'],
  providers: [ GetDataService ]
})
export class WritingComponent implements OnInit {

  constructor(private getDataService: GetDataService) { }

  data: Object;

  ngOnInit() {
    this.getDataService.getWriteOffline().then(result => {
      this.data = result;

      console.log(this.data);
    });
  }

}
