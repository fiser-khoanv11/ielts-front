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

  books: Array<Array<Object>> = [];
  titles: Array<string> = [];

  ngOnInit() {
    this.testSv.find().then(result => {
      for (let i = 0; i < result.length; i++) {
        if (this.titles.indexOf(result[i].description) < 0) {
          this.titles.push(result[i].description);
        }
      }

      for (let i = 0; i < this.titles.length; i++) {
        this.books[i] = [];
      }

      for (let i = 0; i < result.length; i++) {
        let index = this.titles.indexOf(result[i].description);
        this.books[index].push(result[i]);
      }
    });
  }

}
