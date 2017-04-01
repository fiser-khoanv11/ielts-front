import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { AccountService } from './account.service';
import { GlobalService } from './global.service';

@Injectable()
export class AttemptService {

  constructor(private http: Http, private acc: AccountService) { }

  saveAttempt(data): Promise<any> {
    return new Promise((resolve, reject) => {
      this.acc.checkStatus().then(
        (value: any) => {
          if (value) {
            data.userId = value.id;
            let add: string = data.skill === 'writing' ? '-w' : '';
            this.http.post(GlobalService.url + '/api/user/save-attempt' + add, data).subscribe(
              (value: any) => resolve(value),
              (error: any) => reject(error)
            );
          }
        },
        (reason: any) => reject(reason)
      );
    });
  }

}
