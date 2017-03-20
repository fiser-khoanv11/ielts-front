import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../../services/converter.service';
import { TableComponent } from '../../common-types/table/table.component'

@Component({
  selector: 'app-r-table',
  templateUrl: './r-table.component.html',
  styleUrls: ['./r-table.component.css'],
  providers: [ ConverterService ]
})
export class RTableComponent extends TableComponent {

}
