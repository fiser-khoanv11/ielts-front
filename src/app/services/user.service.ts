import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
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

  saveUser(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(GlobalService.url + '/api/user/save', data).subscribe(
        (value: any) => resolve(value),
        (error: any) => reject(error)
      );
    });
  }

  saveAttempt(_userId: number, _testId: number, _skill: string, _score: number): Promise<any> {
    let data = {
      userId: _userId,
      testId: _testId,
      skill: _skill,
      score:_score
    }

    return new Promise((resolve, reject) => {
      this.http.post(GlobalService.url + '/api/user/save-attempt', data).subscribe(
        (value: any) => resolve(value),
        (error: any) => reject(error)
      );
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
