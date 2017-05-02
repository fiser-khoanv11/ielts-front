import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.dialog.html',
  styleUrls: ['./feedback.dialog.css']
})
export class FeedbackDialog implements OnInit {

  constructor(private dialogRef: MdDialogRef<FeedbackDialog>) { }

  ngOnInit() {
    
  }

}
