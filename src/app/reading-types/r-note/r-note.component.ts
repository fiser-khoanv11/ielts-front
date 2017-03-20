import { Component } from '@angular/core';
import { ConverterService } from '../../services/converter.service';
import { NoteComponent } from '../../common-types/note/note.component';

@Component({
  selector: 'app-r-note',
  templateUrl: './r-note.component.html',
  styleUrls: ['./r-note.component.css'],
  providers: [ ConverterService ]
})
export class RNoteComponent extends NoteComponent {

}
