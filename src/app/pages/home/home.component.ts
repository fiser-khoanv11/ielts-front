import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ TestService ]
})
export class HomeComponent implements OnInit {

  constructor(private testSv: TestService) { }

  tests: Array<Object>;

  ngOnInit() {
    this.testSv.find().then(result => {
      this.tests = result;
    });
  }

}
