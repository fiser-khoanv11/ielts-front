import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GlobalService } from './global.service';

@Injectable()
export class GetDataService {

  constructor(private http: Http) { }

  findOne(testId: number, skill: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(GlobalService.url + '/api/skill/find-one/' + skill + '/' + testId).subscribe(
        (value: any) => resolve(value.json()),
        (error: any) => reject(error)
      );
    });
  }

}
