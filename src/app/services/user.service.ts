import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { AccountService } from './account.service';
import { GlobalService } from './global.service';

export class User {
  id: number;
  first_name: string;
  name: string;
  email: string;
  picture: Object;
  attempts: Array<Object>;
}

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  saveUser(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(GlobalService.url + '/api/user/save', data).subscribe(
        (value: any) => resolve(value),
        (error: any) => reject(error)
      );
    });
  }

  findOne(userId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(GlobalService.url + '/api/user/find-one/' + userId).subscribe(
        (value: any) => resolve(value.json()),
        (error: any) => reject(error)
      );
    });
  }

}
