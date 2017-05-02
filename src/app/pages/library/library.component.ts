import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
  providers: [ TestService ]
})
export class LibraryComponent implements OnInit {

  constructor(private testSv: TestService) { }

  tests: Array<Object> = [];
  titles: Array<string> = [];

  ngOnInit() {
    this.testSv.find().then(result => {
      this.tests = result;

      for (let i = 0; i < result.length; i++) {
        if (this.titles.indexOf(result[i].book_title) < 0) {
          this.titles.push(result[i].book_title);
        }
      }
    });
  }

}
