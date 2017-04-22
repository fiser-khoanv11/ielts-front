import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FacebookService } from 'ng2-facebook-sdk';
import { FileDropDirective, FileSelectDirective } from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ResultComponent } from './pages/result/result.component';
import { ReadingComponent } from './skills/reading/reading.component';
import { ListeningComponent } from './skills/listening/listening.component';
import { WritingComponent } from './skills/writing/writing.component';
import { SpeakingComponent } from './skills/speaking/speaking.component';
import { CommonComponent } from './skills/common/common.component';

import { TrueFalseComponent } from './reading-types/true-false/true-false.component';
import { AnswerComponent } from './common-types/answer/answer.component';
import { HeadingComponent } from './reading-types/heading/heading.component';
import { SentenceComponent } from './common-types/sentence/sentence.component';
import { EndingComponent } from './reading-types/ending/ending.component';
import { InformationComponent } from './reading-types/information/information.component';
import { SummarySelectComponent } from './reading-types/summary-select/summary-select.component';
import { OptionListComponent } from './components/option-list/option-list.component';
import { FeatureComponent } from './common-types/feature/feature.component';
import { MultipleComponent } from './common-types/multiple/multiple.component';
import { NoteComponent } from './common-types/note/note.component';
import { SingleComponent } from './common-types/single/single.component';
import { TableComponent } from './common-types/table/table.component';

import { TestToolbarComponent } from './components/test-toolbar/test-toolbar.component';

import { GlobalService } from './services/global.service';
import { UserService } from './services/user.service';
import { AccountService } from './services/account.service';

import { SubmitDialog } from './skills/dialogs/submit.dialog';

import { LetterPipe } from './pipes/letter.pipe';
import { TimerPipe } from './pipes/timer.pipe';
import { RomanPipe } from './pipes/roman.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import { LibraryComponent } from './pages/library/library.component';
import { AudioComponent } from './pages/audio/audio.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadingComponent,
    SubmitDialog,
    ListeningComponent,
    TrueFalseComponent,
    AnswerComponent,
    HeadingComponent,
    RomanPipe,
    HomeComponent,
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

    CommonComponent,

    LoadingComponent,

    LibraryComponent,

    AudioComponent,
    FileDropDirective,
    FileSelectDirective
  ],
  entryComponents: [
    SubmitDialog,
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    FacebookService,
    GlobalService,
    UserService,
    AccountService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
