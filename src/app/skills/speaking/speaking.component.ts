import { Component, OnInit } from '@angular/core';

import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-speaking',
  templateUrl: './speaking.component.html',
  styleUrls: ['./speaking.component.css'],
  providers: [ GetDataService ]
})
export class SpeakingComponent implements OnInit {

  constructor(private getDataService: GetDataService) { }

  data: Object;

  ngOnInit() {
    this.getDataService.getSpeakOffline().then(result => {
      this.data = result;

      console.log(this.data);
    });
  }

}
