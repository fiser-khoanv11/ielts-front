import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';

import { UserService } from './user.service';

export class User {
  id: number;
  first_name: string;
  name: string;
  email: string;
  picture: Object;
  attempts: Array<Object>;
}

@Injectable()
export class GlobalService {

  // static url: string = '';
  static url: string = 'http://localhost:3000';
  
  public user: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);

  constructor() {}

  setFb(_user: User): void {
    // this.userSv.findOne(_user.id).then(result => {
      this.user.next(_user);
    // });
  }

}
