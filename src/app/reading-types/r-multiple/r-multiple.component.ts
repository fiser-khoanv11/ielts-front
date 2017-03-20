import { Component } from '@angular/core';
import { ConverterService } from '../../services/converter.service';
import { MultipleComponent } from '../../common-types/multiple/multiple.component'

@Component({
  selector: 'app-r-multiple',
  templateUrl: './r-multiple.component.html',
  styleUrls: ['./r-multiple.component.css'],
  providers: [ ConverterService ]
})
export class RMultipleComponent extends MultipleComponent {

}
