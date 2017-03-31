import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-option-list',
  templateUrl: './option-list.component.html',
  styleUrls: ['./option-list.component.css']
})
export class OptionListComponent implements OnInit {

  @Input() list: Array<string>;
  @Input() answers: Array<number>;
  @Input() mark: string;

  constructor() { }

  ngOnInit() {
  }

  changeColor(value: number): boolean {
    if (this.answers.indexOf(value) >= 0) {
      return true;
    }

    return false;
  }

}
