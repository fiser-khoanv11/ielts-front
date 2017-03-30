import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListeningComponent } from './skills/listening/listening.component';
import { ReadingComponent } from './skills/reading/reading.component';
import { WritingComponent } from './skills/writing/writing.component';
import { SpeakingComponent } from './skills/speaking/speaking.component';
import { TestComponent } from './pages/test/test.component';
import { ResultComponent } from './pages/result/result.component';

const appRoutes: Routes = [
  { path: '', component: TestComponent },
  { path: 'test/:testId/reading', component: ReadingComponent },
  { path: 'test/:testId/listening', component: ListeningComponent },
  { path: 'test/writing', component: WritingComponent },
  { path: 'test/speaking', component: SpeakingComponent },
  { path: 'result', component: ResultComponent },
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
