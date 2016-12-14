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

@NgModule({
  declarations: [
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
    TextNumberPipe
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
