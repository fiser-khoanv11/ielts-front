import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i-reading',
  templateUrl: './i-reading.component.html',
  styleUrls: ['./i-reading.component.css']
})
export abstract class IReadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  abstract getAnswers();

}