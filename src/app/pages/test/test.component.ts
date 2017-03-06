import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  tests = [1, 2, 3];
  cardWidth: string;

  ngOnInit() {
    this.cardWidth = (document.body.clientWidth / 4) + 'px';
    console.log(this.cardWidth);
  }

}
