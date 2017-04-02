import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GetDataService } from '../../services/get-data.service';
import { AttemptService } from '../../services/attempt.service';
import { AccountService } from '../../services/account.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['../common/common.component.css', './writing.component.css'],
  providers: [ GetDataService, AttemptService ]
})
export class WritingComponent implements OnInit {

  constructor(private getDataService: GetDataService, private route: ActivatedRoute,
              private att: AttemptService, private acc: AccountService,
              private userSv: UserService) { }

  data: Object;
  testId: number;
  task1: string;
  task2: string;
  _task1: string;
  _task2: string;
  isSubmitted: boolean = false;

  ngOnInit() {
    this.testId = this.route.snapshot.params['testId'];

    this.getDataService.findOne(this.testId, 'writing').then(
      (value: any) => {
        this.data = value;
      },
      (reason: any) => console.error(reason)
    );

    this.acc.checkStatus().then(
      (value: any) => {
        if (value) {
          this.userSv.findOne(value.id).then(
            (value: any) => {
              for (let i = 0; i < value.attempts.length; i++) {
                let attempt = value.attempts[i];
                if (attempt.skill === 'writing' && attempt.test_id == this.testId) {
                  this.task1 = this._task1 = attempt.task1;
                  this.task2 = this._task2 = attempt.task2;
                  break;
                }
              }
            },
            (reason: any) => console.error(reason)
          );
        }
      },
      (reason: any) => console.error(reason)
    );
  }

  submit(): void {
    let sendData = {
      testId: this.testId,
      skill: 'writing',
      task1: this.task1,
      task2: this.task2
    };

    this.att.saveAttempt(sendData).then(
      (value: any) => {
        this.isSubmitted = true;
        this._task1 = this.task1;
        this._task2 = this.task2;
      },
      (reason: any) => console.error(reason)
    );
  }

  isDisabled(): boolean {
    if (this.task1 == this._task1 && this.task2 == this._task2) return true;
    return false;
  }

}
