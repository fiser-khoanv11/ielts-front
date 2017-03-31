import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { AccountService } from 'app/services/account.service';
import { GlobalService } from 'app/services/global.service';
import { FacebookService, FacebookLoginResponse, FacebookInitParams, FacebookLoginStatus } from 'ng2-facebook-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ UserService ]
})
export class AppComponent implements OnInit {

  user: Object;

  constructor(private fb: FacebookService, private userService: UserService, 
              private global: GlobalService, private acc: AccountService) { }

  ngOnInit() {
    this.acc.init();
    this.acc.checkStatus().then(
      (value: any) => this.user = value,
      (reason: any) => console.error(reason)
    );
  }
  
  fbLogin(): void {
    this.acc.login().then(
      (value: any) => this.user = value,
      (reason: any) => console.error(reason)
    );
  }

  fbLogout(): void {
    this.acc.logout().then(
      (value: any) => {
        this.user = undefined;
      },
      (reason: any) => console.error(reason)
    );
  }

}
