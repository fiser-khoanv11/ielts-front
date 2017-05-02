import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { AccountService } from 'app/services/account.service';
import { FeedbackDialog } from 'app/dialogs/feedback/feedback.dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  user: Object;

  constructor(private acc: AccountService, private dialog: MdDialog) { }

  ngOnInit() {
    this.acc.init();
    this.acc.checkStatus().then(
      (value: any) => this.user = value,
      (reason: any) => console.error(reason)
    );
  }
  
  fbLogin(): void {
    this.acc.login().then(
      (value: any) => location.reload(),
      (reason: any) => console.error(reason)
    );
  }

  fbLogout(): void {
    this.acc.logout().then(
      (value: any) => location.reload(),
      (reason: any) => console.error(reason)
    );
  }

  public openFeedback(): void {
    let dialogRef = this.dialog.open(FeedbackDialog);
  }

}
