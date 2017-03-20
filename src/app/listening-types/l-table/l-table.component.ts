import { Component } from '@angular/core';
import { ConverterService } from '../../services/converter.service';
import { TableComponent } from '../../common-types/table/table.component'

@Component({
  selector: 'app-l-table',
  templateUrl: './l-table.component.html',
  styleUrls: ['./l-table.component.css'],
  providers: [ ConverterService ]
})
export class LTableComponent extends TableComponent {

}
