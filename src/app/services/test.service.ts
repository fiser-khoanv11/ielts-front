import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GlobalService } from './global.service';

@Injectable()
export class TestService {

  constructor(private http: Http) { }

  find(): Promise<any> {
    return new Promise(resolve => {
      this.http.get(GlobalService.url + '/api/test/find').subscribe(response => {
        resolve(response.json());
      });
    });
  }

  findOne(testId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(GlobalService.url + '/api/test/find-one/' + testId).subscribe(
        (value: any) => resolve(value.json()),
        (error: any) => reject(error)
      );
    });
  }

}
