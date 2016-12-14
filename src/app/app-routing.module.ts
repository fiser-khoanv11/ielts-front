import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComaComponent } from './components/coma/coma.component';
import { CombComponent } from './components/comb/comb.component';
import { ComcComponent } from './components/comc/comc.component';
import { ReadingComponent } from './skills/reading/reading.component';
import { ListeningComponent } from './skills/listening/listening.component';

const appRoutes: Routes = [
  { path: 'reading', component: ReadingComponent },
  { path: 'listening', component: ListeningComponent },
  { path: 'comc', component: ComcComponent },
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
