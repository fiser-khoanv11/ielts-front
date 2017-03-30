import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { ConverterService } from '../../services/converter.service';
import { UserService } from '../../services/user.service';
import { GlobalService } from '../../services/global.service';

class Data {
  answers: Array<Object>;
  keys: Array<Object>;
  isSubmited: boolean;
  skill: string;
  testId: number;
}

@Component({
  selector: 'app-submit',
  templateUrl: './submit.dialog.html',
  styleUrls: ['./submit.dialog.css'],
  providers: [ ConverterService, UserService ]
})
export class SubmitDialog implements OnInit {

  data: Data;
  testResult: {result: Array<boolean>, noOfCorrect: number, score: number};

  constructor(private dialogRef: MdDialogRef<any>, private converter: ConverterService,
              private userSv: UserService, private global: GlobalService) { }

  ngOnInit() {
    this.data = this.dialogRef.config.data.data;
    this.testResult = this.converter.getTestResult(this.data.answers, this.data.keys);
  }

  ngOnDestroy() {
    this.dialogRef.close(this.data.isSubmited);
  }

  submit() {
    this.data.isSubmited = true;

    this.global.user.subscribe(user => {
      if (user != undefined) {
        this.userSv.saveAttempt(user.id, this.data.testId, this.data.skill, this.testResult.score);
      }
    });
  }

}
