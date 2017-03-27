import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TestService {

  constructor(private http: Http) { }

  find(): Promise<Array<Object>> {
    return new Promise(resolve => {
      this.http.get('/api/test/find').subscribe(response => {
        resolve(response.json());
      });
    });
  }

  getReadingTest(id: string): Promise<Object> {
    return new Promise(resolve => {
      // console.log(id);
      this.http.get('http://localhost:3000/api/readings/' + id).subscribe(result => {
        resolve(result.json());
      });
    });
  }

}
