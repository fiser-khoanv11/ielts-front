/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SentenceComponent } from './sentence.component';

import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

describe('SentenceComponent', () => {
  let component: SentenceComponent;
  let fixture: ComponentFixture<SentenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentenceComponent ],
      imports: [ MaterialModule.forRoot(), FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceComponent);
    component = fixture.componentInstance;

    component.data = {
                    "first": 35,
                    "last": 40,
                    "type": "sentence",
                    "directions": [
                        "Complete the sentences below.",
                        "Choose <b>ONE WORD ONLY<\/b> from the passage for each answer.",
                        "Write your answer in boxes 35-40 on your answer sheet."
                    ],
                    "sentences": [
                        "Some areas of both music and mathematics are suitable for someone who is a [].",
                        "It is sometimes possible to understand advanced mathematics using no more than a limited knowledge of [].",
                        "The writer intends to show that mathematics requires [] thinking, as well as analytical skills.",
                        "Some books written by [] have had to leave out the mathematics that is central to their theories.",
                        "The writer advises non-mathematical readers to perform [] while reading the book.",
                        "A lawyer found that studying [] helped even more than other areas of mathematics in the study of law."
                    ]
                }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
