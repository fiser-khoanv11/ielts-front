import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { GlobalService } from 'app/services/global.service';
import { FacebookService, FacebookLoginResponse, FacebookInitParams, FacebookLoginStatus } from 'ng2-facebook-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ UserService ]
})
export class AppComponent implements OnInit {

  fbConnected: boolean = false;
  user: Object;

  constructor(private fb: FacebookService, private userService: UserService, private global: GlobalService) {
    let fbParams: FacebookInitParams = {
      appId: '1084564141677221',
      cookie: true,
      xfbml: true,
      version: 'v2.8'
    };
    this.fb.init(fbParams);
  }

  ngOnInit() {
    this.showFbLoginStatus();
  }
  
  fbLogin(): void {
    this.fb.login().then(
      (response: FacebookLoginResponse) => {
        console.log(response);
        this.fb.api('/me?fields=first_name,name,picture,email').then(data => {
          this.userService.saveUser(data);
          this.fbConnected = true;
          this.user = data;
          this.global.setFb(data);
        });
      },
      (error: any) => console.error(error)
    );
  }

  showFbLoginStatus(): void {
    this.fb.getLoginStatus().then(
      (response: FacebookLoginStatus) => {
        console.log(response);
        if (response.status === 'connected') {
          this.fbConnected = true;
          this.fb.api('/me?fields=first_name,name,picture,email').then(data => {
            this.user = data;
            this.global.setFb(data);
          });
        }
      }
    );
  }

  fbLogout(): void {
    this.fb.logout().then(
      (value: any) => {
        console.log(value);
        this.fbConnected = false;
        this.user = undefined;
        this.global.setFb(undefined);
      },
      (reason: any) => console.error(reason)
    );
  }

}
