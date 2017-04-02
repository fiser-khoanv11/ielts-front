import { Component, OnInit, Input } from '@angular/core';

import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-test-toolbar',
  templateUrl: './test-toolbar.component.html',
  styleUrls: ['./test-toolbar.component.css'],
  providers: [ TestService ]
})
export class TestToolbarComponent implements OnInit {

  @Input() currentPage: number;
  @Input() testId: number;
  test: Object;

  constructor(private testSv: TestService) { }

  ngOnInit() {
    this.testSv.findOne(this.testId).then(
      (value: any) => this.test = value,
      (reason: any) => console.error(reason)
    );
  }

}
