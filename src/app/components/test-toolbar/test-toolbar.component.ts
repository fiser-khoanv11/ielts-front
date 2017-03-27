import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-toolbar',
  templateUrl: './test-toolbar.component.html',
  styleUrls: ['./test-toolbar.component.css']
})
export class TestToolbarComponent implements OnInit {

  @Input() currentPage: number;
  @Input() testId: number;

  constructor() { }

  ngOnInit() {
  }

}
