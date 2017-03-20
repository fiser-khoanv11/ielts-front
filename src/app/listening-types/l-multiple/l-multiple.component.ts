import { Component } from '@angular/core';
import { ConverterService } from '../../services/converter.service';
import { MultipleComponent } from '../../common-types/multiple/multiple.component'

@Component({
  selector: 'app-l-multiple',
  templateUrl: './l-multiple.component.html',
  styleUrls: ['./l-multiple.component.css'],
  providers: [ ConverterService ]
})
export class LMultipleComponent extends MultipleComponent {

}
