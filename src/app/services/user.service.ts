import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  saveUser(data: any): void {
    this.http.post('http://localhost:3000/user/save', data).subscribe(result => {
      // console.info(result);
    });
  }

}
