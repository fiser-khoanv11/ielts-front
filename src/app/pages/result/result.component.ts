import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  private user: Object;

  constructor(private userSv: UserService, private global: GlobalService) { }

  ngOnInit() {
    this.global.user.subscribe(_user => {
      if (_user) {
        this.userSv.findOne(_user.id).then(result => {
          this.user = result;
        });
      }
    });
  }

}
