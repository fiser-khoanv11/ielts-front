import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { ConverterService } from '../../services/converter.service';
import { AttemptService } from '../../services/attempt.service';

class Data {
  answers: Array<Object>;
  keys: Array<Object>;
  isSubmited: boolean;
  skill: string;
  testId: number;
  isBecauseOfTimingOut: boolean;
}

@Component({
  selector: 'app-submit',
  templateUrl: './submit.dialog.html',
  styleUrls: ['./submit.dialog.css'],
  providers: [ ConverterService, AttemptService ]
})
export class SubmitDialog implements OnInit {

  data: Data;
  testResult: {result: Array<boolean>, noOfCorrect: number, score: number};

  constructor(private dialogRef: MdDialogRef<SubmitDialog>, private converter: ConverterService,
              private att: AttemptService) { }

  ngOnInit() {
    this.data = this.dialogRef.config.data.data;
    this.testResult = this.converter.getTestResult(this.data.answers, this.data.keys);
    if (this.data.isBecauseOfTimingOut) this.submit();
  }

  ngOnDestroy() {
    this.dialogRef.close(this.data.isSubmited);
  }

  submit() {
    this.data.isSubmited = true;

    let sendData = {
      testId: this.data.testId,
      skill: this.data.skill,
      score: this.testResult.score
    };

    this.att.saveAttempt(sendData).then(
      (value: any) => {},
      (reason: any) => console.error(reason)
    );
  }

}
