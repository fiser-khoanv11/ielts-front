import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ConverterService } from '../../services/converter.service';

@Component({
  selector: 'app-option-list',
  templateUrl: './option-list.component.html',
  styleUrls: ['./option-list.component.css'],
  providers: [ ConverterService ]
})
export class OptionListComponent implements OnInit {

  @Input() list: Array<string>;
  @Input() answers: Array<string>;
  @Input() mark: string;

  constructor(private cvt: ConverterService) { }

  ngOnInit() { }

  changeColor(value: number): boolean {
    let str: string;
    if (this.mark === 'roman') {
      str = this.cvt.numberToRoman(value);  
    } else if (this.mark === 'letter') {
      str = this.cvt.numberToLetter(value);  
    }

    if (this.answers.indexOf(str) >= 0) {
      return true;
    }

    return false;
  }

}
