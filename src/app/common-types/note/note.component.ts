import { Component, OnInit, Input } from '@angular/core';
import { ConverterService } from '../../services/converter.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() data: Object;
  displayParas: Array<Array<Object>> = [];
  answers: Object[] = [];

  constructor(private converterService: ConverterService) { }

  ngOnInit() {
    let paras = this.data['paras'];
    this.displayParas = this.converterService.paragraphToArray(paras, this.data['first']);

    for (let i = 0; i < paras.length; i++) {
      this.answers[i] = [];
    }
  }

  getAnswers() {
    let res: string[] = [];
    for (let i = 0; i < this.displayParas.length; i++) {
      for (let j = 0; j < this.displayParas[i].length; j++) {
        if (this.displayParas[i][j]['isInput']) {
          res.push(this.answers[i][j]);
        }
      }
    }

    return res;
  }

}
