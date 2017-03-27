import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { ConverterService } from '../../services/converter.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.dialog.html',
  styleUrls: ['./submit.dialog.css'],
  providers: [ ConverterService ]
})
export class SubmitDialog implements OnInit {

  answers: Array<Object>;
  keys: Array<Object>;
  testResult: {result: Array<boolean>, noOfCorrect: number, score: number};
  isSubmited: boolean;
  isTimeout: boolean;

  constructor(private dialogRef: MdDialogRef<any>, private converterService: ConverterService) { }

  ngOnInit() {
    this.answers = this.dialogRef.config.data.answers;
    console.log(JSON.stringify(this.answers));
    this.keys = this.dialogRef.config.data.keys;
    this.isSubmited = this.dialogRef.config.data.isSubmited;
    this.isTimeout = this.dialogRef.config.data.isTimeout;
    this.testResult = this.converterService.getTestResult(this.answers, this.keys);

    if (this.isTimeout) {
      this.submit();
    }
  }

  ngOnDestroy() {
    this.dialogRef.close(this.isSubmited);
  }

  submit() {
    this.isSubmited = true;
  }

}
