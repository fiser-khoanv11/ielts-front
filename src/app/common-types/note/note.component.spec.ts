/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NoteComponent } from './note.component';

import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteComponent ],
      imports: [ MaterialModule.forRoot(), FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;

    component.data = {
                    "first": 23,
                    "last": 26,
                    "type": "note",
                    "directions": [
                        "Complete the summary below.",
                        "Choose <b>ONE WORD ONLY<\/b> from the passage for each answer.",
                        "Write your answers in boxes 23-26 on your answer sheet."
                    ],
                    "heading": "The migration of pronghorns",
                    "paras": [
                        "Pronghorns rely on their eyesight and [] to avoid predators. One particular population's summer habitat is a national park, and their winter home is on the [], where they go to avoid the danger presented by the snow at that time of year. However, their route between these two areas contains three []. One problem is the construction of new homes in a narrow [] of land on the pronghorns' route."
                    ]
                }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
