import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { UserService } from './user.service';
import { FacebookService, FacebookInitParams, FacebookLoginResponse, FacebookLoginStatus } from 'ng2-facebook-sdk';

@Injectable()
export class AccountService {

  apiUrl: string = '/me?fields=first_name,name,picture,email';

  constructor(private fb: FacebookService, private userSv: UserService) { }

  init() {
    let fbParams: FacebookInitParams = {
      appId: '1084564141677221',
      cookie: true,
      xfbml: true,
      version: 'v2.8'
    };
    this.fb.init(fbParams);
  }

  login(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.fb.login().then(
        (value: FacebookLoginResponse) => {
          this.fb.api(this.apiUrl).then(
            (_value: any) => {
              this.userSv.saveUser(_value).then(
                (value: any) => {
                  resolve(_value);
                },
                (reason: any) => {
                  this.logout();
                  reject(reason);
                }
              );
            },
            (reason: any) => {
              this.logout();
              reject(reason);
            }
          )
        },
        (reason: any) => reject(reason)
      );
    });
  }

  checkStatus(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.fb.getLoginStatus().then(
        (value: FacebookLoginStatus) => {
          if (value.status === 'connected') {
            this.fb.api(this.apiUrl).then(
              (_value: any) => {
                resolve(_value);
              },
              (reason: any) => {
                // this.logout();
                reject(reason);
              }
            )
          } else {
            resolve(undefined);
          }
        },
        (reason: any) => reject(reason)
      );
    });
  }

  logout(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.fb.logout().then(
        (value: any) => {
          resolve(value)
        },
        (reason: any) => reject(reason)
      );
    });
  }

}
