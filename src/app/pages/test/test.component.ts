import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [ TestService ]
})
export class TestComponent implements OnInit {

  constructor(private testService: TestService) { }

  tests: Array<Object>;
  cardWidth: string;

  ngOnInit() {
    this.testService.find().then(result => {
      this.tests = result;
    });

    this.cardWidth = (window.innerHeight - 64 * 2 - 20) + 'px';
  }

}
