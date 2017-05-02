/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EndingComponent } from './ending.component';

import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { OptionListComponent } from '../../components/option-list/option-list.component';
import { LetterPipe } from '../../pipes/letter.pipe';
import { RomanPipe } from '../../pipes/roman.pipe';

describe('EndingComponent', () => {
  let component: EndingComponent;
  let fixture: ComponentFixture<EndingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndingComponent, OptionListComponent, LetterPipe, RomanPipe ],
      imports: [ MaterialModule.forRoot(), FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndingComponent);
    component = fixture.componentInstance;

    component.data = {}

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('mark style should be letter', () => {
    expect(component.mark).toBe('letter');
  });
});
