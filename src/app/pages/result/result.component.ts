import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { AccountService } from '../../services/account.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  private user: Object;

  constructor(private userSv: UserService, private acc: AccountService) { }

  ngOnInit() {
    this.acc.checkStatus().then(
      (value: any) => {
        if (value) {
          this.userSv.findOne(value.id).then(
            (value: any) => this.user = value,
            (reason: any) => console.error(reason)
          );
        }
      },
      (reason: any) => console.error(reason)
    );
  }

}
