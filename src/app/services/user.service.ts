import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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

  constructor(private http: Http, private global: GlobalService) { }

  saveUser(data: any): void {
    this.http.post(GlobalService.url + '/api/user/save', data).subscribe(response => {
      console.info(response);
    });
  }

  saveAttempt(_userId: number, _testId: number, _skill: string, _score: number): void {
    let data = {
      userId: _userId,
      testId: _testId,
      skill: _skill,
      score:_score
    }

    console.log(data);
    this.http.post(GlobalService.url + '/api/user/save-attempt', data).subscribe(response => {
      console.info(response);
    }); 
  }

  findOne(userId: number): Promise<Array<Object>> {
    return new Promise(resolve => {
      this.http.get(GlobalService.url + '/api/user/find-one/' + userId).subscribe(response => {
        resolve(response.json());
      });
    });
  }

}
