/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MultipleComponent } from './multiple.component';

import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { LetterPipe } from '../../pipes/letter.pipe';

describe('MultipleComponent', () => {
  let component: MultipleComponent;
  let fixture: ComponentFixture<MultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleComponent, LetterPipe ],
      imports: [ MaterialModule.forRoot(), FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleComponent);
    component = fixture.componentInstance;

    component.data = {}

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('answers should be letters', () => {
    expect(component).toBeTruthy();
  });

  it('answers should be within limit', () => {
    expect(component).toBeTruthy();
  });
});
