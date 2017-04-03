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

  tests: Array<Object>;

  ngOnInit() {
    this.testSv.find().then(result => {
      this.tests = result;
    });
  }

}
