import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  @Input() data: Object;
  answers: string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
