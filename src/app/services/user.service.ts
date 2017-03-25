import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  saveUser(data: any): void {
    this.http.post('/users/save', data).subscribe(response => {
      console.info(response);
    });
  }

}
