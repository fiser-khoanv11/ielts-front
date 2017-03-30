import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GlobalService } from './global.service';

@Injectable()
export class TestService {

  constructor(private http: Http) { }

  find(): Promise<Array<Object>> {
    return new Promise(resolve => {
      this.http.get(GlobalService.url + '/api/test/find').subscribe(response => {
        resolve(response.json());
      });
    });
  }

}
