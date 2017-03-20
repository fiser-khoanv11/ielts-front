import { Component } from '@angular/core';
import { ConverterService } from '../../services/converter.service';
import { NoteComponent } from '../../common-types/note/note.component';

@Component({
  selector: 'app-l-note',
  templateUrl: './l-note.component.html',
  styleUrls: ['./l-note.component.css'],
  providers: [ ConverterService ]
})
export class LNoteComponent extends NoteComponent{

}
