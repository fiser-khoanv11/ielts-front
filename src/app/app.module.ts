import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

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
import { MultipleComponent } from './reading-types/multiple/multiple.component';
import { SingleComponent } from './reading-types/single/single.component';
// import { SummaryCompletionComponent } from './reading-types/summary-completion/summary-completion.component';
import { SummaryComponent } from './reading-types/summary/summary.component';
import { BlankSpaceDirective } from './directives/blank-space.directive';
import { SentenceComponent } from './reading-types/sentence/sentence.component';
import { EndingComponent } from './reading-types/ending/ending.component';
import { LetterPipe } from './pipes/letter.pipe';
import { InformationComponent } from './reading-types/information/information.component';
import { SummarySelectComponent } from './reading-types/summary-select/summary-select.component';
import { OptionListComponent } from './components/option-list/option-list.component';
import { IReadingComponent } from './reading-types/i-reading/i-reading.component';
import { FeatureComponent } from './reading-types/feature/feature.component';
import { TableComponent } from './reading-types/table/table.component';

@NgModule({
  declarations: [
    // IReadingComponent
    AppComponent,
    ComaComponent,
    CombComponent,
    ComcComponent,
    ReadingComponent,
    ListeningComponent,
    TrueFalseComponent,
    AnswerComponent,
    HeadingComponent,
    RomanPipe,
    TextNumberPipe,
    TestComponent,
    ResultComponent,
    TestToolbarComponent,
    MultipleComponent,
    SingleComponent,
    // SummaryCompletionComponent,
    SummaryComponent,
    BlankSpaceDirective,
    SentenceComponent,
    EndingComponent,
    LetterPipe,
    InformationComponent,
    SummarySelectComponent,
    OptionListComponent,
    FeatureComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
