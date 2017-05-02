import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListeningComponent } from './skills/listening/listening.component';
import { ReadingComponent } from './skills/reading/reading.component';
import { WritingComponent } from './skills/writing/writing.component';
import { SpeakingComponent } from './skills/speaking/speaking.component';
import { HomeComponent } from './pages/home/home.component';
import { ResultComponent } from './pages/result/result.component';
import { LibraryComponent } from './pages/library/library.component';
import { AboutIeltsComponent } from './pages/about-ielts/about-ielts.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'about-ielts', component: AboutIeltsComponent },
  { path: 'result', component: ResultComponent },
  { path: 'reading/:testId', component: ReadingComponent },
  { path: 'listening/:testId', component: ListeningComponent },
  { path: 'writing/:testId', component: WritingComponent },
  { path: 'speaking/:testId', component: SpeakingComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
