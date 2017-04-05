import { Component, OnInit, Input } from '@angular/core';
import { ConverterService } from '../../services/converter.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.css'],
  providers: [ ConverterService ]
})
export class MultipleComponent implements OnInit {

  @Input() data: Object;
  answers: boolean[] = [];
  numberOfChecked: number;

  constructor(public snackBar: MdSnackBar, private converterService: ConverterService) { }

  ngOnInit() { }

  checkLimit(p): void {
    let count = 0;

    for (let i = 0; i < this.answers.length; i++) {
      if (this.answers[i]) count++;
    }

    if (count > this.data['limit']) {
      this.answers[p] = false;
    }

    // if (this.numberOfChecked == this.data['limit'] && count == this.data['limit'] + 1) {
    //   console.warn('Limit');
    //   this.snackBar.open('Be careful with the choice limit!', 'OK', {
    //     duration: 2000
    //   });
    // }

    // this.numberOfChecked = count;
  }

  getAnswers() {
    let res: string[] = [];
    for (let i = 0; i < this.answers.length; i++) {
      if (this.answers[i]) {
        res.push(this.converterService.numberToLetter(i + 1));
      }
    }

    return res;
  }

}
