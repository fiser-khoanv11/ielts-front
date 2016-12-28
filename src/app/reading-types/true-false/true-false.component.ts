import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-true-false',
  templateUrl: './true-false.component.html',
  styleUrls: ['./true-false.component.css']
})
export class TrueFalseComponent implements OnInit {

  @Input() data: Object;
  @Input() sectionNumber: number;
  options: string[] = ['true', 'false', 'not given'];
  answers: string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
