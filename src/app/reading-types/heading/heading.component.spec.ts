/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeadingComponent } from './heading.component';

import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { OptionListComponent } from '../../components/option-list/option-list.component';
import { LetterPipe } from '../../pipes/letter.pipe';
import { RomanPipe } from '../../pipes/roman.pipe';

describe('HeadingComponent', () => {
  let component: HeadingComponent;
  let fixture: ComponentFixture<HeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingComponent, OptionListComponent, LetterPipe, RomanPipe ],
      imports: [ MaterialModule.forRoot(), FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingComponent);
    component = fixture.componentInstance;

    component.data = {
      "first": 14,
      "last": 21,
      "type": "heading",
      "directions": [
        "Reading Passage 2 has nine paragraph, <b>A-I</b>.",
        "Choose the correct heading for paragraphs <b>A-E</b> and <b>G-I</b> from the list of headings below.",
        "Write the correct number, <b>i-xi</b>, in boxes 14-21 on your answer sheet."
      ],
      "headings": [
        "A fresh and important long-term goal",
        "Changing for roads and improving other transport methods",
        "Changes affecting the distances goods may be transported"
      ],
      "paras": [
        {
          "char": "a"
        },
        {
          "char": "b"
        },
        {
          "char": "c"
        }
      ]
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('mark style should be roman', () => {
    expect(component.mark).toBe('roman');
  });
});
