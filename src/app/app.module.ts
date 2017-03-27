import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FacebookService } from 'ng2-facebook-sdk';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ComaComponent } from './components/coma/coma.component';
import { CombComponent } from './components/comb/comb.component';
import { ComcComponent } from './components/comc/comc.component';
import { ReadingComponent } from './skills/reading/reading.component';
import { ListeningComponent } from './skills/listening/listening.component';
import { TrueFalseComponent } from './reading-types/true-false/true-false.component';
import { AnswerComponent } from './reading-types/answer/answer.component';
import { HeadingComponent } from './reading-types/heading/heading.component';
import { RomanPipe } from './pipes/roman.pipe';
import { TextNumberPipe } from './pipes/text-number.pipe';
import { TestComponent } from './pages/test/test.component';
import { ResultComponent } from './pages/result/result.component';
import { TestToolbarComponent } from './components/test-toolbar/test-toolbar.component';

// import { SummaryCompletionComponent } from './reading-types/summary-completion/summary-completion.component';

// import { BlankSpaceDirective } from './directives/blank-space.directive';
import { SentenceComponent } from './reading-types/sentence/sentence.component';
import { EndingComponent } from './reading-types/ending/ending.component';
import { LetterPipe } from './pipes/letter.pipe';
import { InformationComponent } from './reading-types/information/information.component';
import { SummarySelectComponent } from './reading-types/summary-select/summary-select.component';
import { OptionListComponent } from './components/option-list/option-list.component';
import { FeatureComponent } from './common-types/feature/feature.component';

// import { HighlightDirective } from './directives/highlight.directive';
import { WritingComponent } from './skills/writing/writing.component';
import { SpeakingComponent } from './skills/speaking/speaking.component';

import { MultipleComponent } from './common-types/multiple/multiple.component';


import { NoteComponent } from './common-types/note/note.component';


import { SingleComponent } from './common-types/single/single.component';


import { TableComponent } from './common-types/table/table.component';
import { TimerPipe } from './pipes/timer.pipe';

import { LMultipleComponent } from './listening-types/l-multiple/l-multiple.component';
import { RMultipleComponent } from './reading-types/r-multiple/r-multiple.component';
import { LTableComponent } from './listening-types/l-table/l-table.component';
import { RTableComponent } from './reading-types/r-table/r-table.component';
import { LNoteComponent } from './listening-types/l-note/l-note.component';
import { RNoteComponent } from './reading-types/r-note/r-note.component';
import { LSingleComponent } from './listening-types/l-single/l-single.component';
import { RSingleComponent } from './reading-types/r-single/r-single.component';
import { CommonComponent } from './skills/common/common.component';
import { SubmitDialog } from './skills/dialogs/submit.dialog'

@NgModule({
  declarations: [
    AppComponent,
    ComaComponent,
    CombComponent,
    ComcComponent,
    ReadingComponent,
    SubmitDialog,
    ListeningComponent,
    TrueFalseComponent,
    AnswerComponent,
    HeadingComponent,
    RomanPipe,
    TextNumberPipe,
    TestComponent,
    ResultComponent,
    TestToolbarComponent,
    
    SentenceComponent,
    EndingComponent,
    LetterPipe,
    InformationComponent,
    SummarySelectComponent,
    OptionListComponent,
    FeatureComponent,
    
    WritingComponent,
    SpeakingComponent,
    
    MultipleComponent,
    SingleComponent,
    NoteComponent,
    TableComponent,
    TimerPipe,

    // IReadingComponent,
    RTableComponent,
    RMultipleComponent,
    RSingleComponent,
    RNoteComponent,
    LTableComponent,
    LMultipleComponent,
    LSingleComponent,
    LNoteComponent,
    CommonComponent,

  ],
  entryComponents: [
    SubmitDialog,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    FacebookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
