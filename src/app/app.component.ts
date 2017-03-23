import { Component, OnInit } from '@angular/core';
import { FacebookService, FacebookLoginResponse, FacebookInitParams, FacebookLoginStatus } from 'ng2-facebook-sdk';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ UserService ]
})
export class AppComponent implements OnInit {

  constructor(private fb: FacebookService, private userService: UserService) {
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
        console.log('Login successfully');
        this.fb.api('/me?fields=first_name,name,picture,email').then(data => {
          this.userService.saveUser(data);
        });
      },
      (error: any) => console.error(error)
    );
  }

  showFbLoginStatus(): void {
    this.fb.getLoginStatus().then(
      (status: FacebookLoginStatus) => console.log(status)
    );
  }

  fbLogout(): void {
    this.fb.logout();
  }


}
