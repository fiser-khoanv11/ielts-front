/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FeatureComponent } from './feature.component';

import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { OptionListComponent } from '../../components/option-list/option-list.component';
import { LetterPipe } from '../../pipes/letter.pipe';
import { RomanPipe } from '../../pipes/roman.pipe';

describe('FeatureComponent', () => {
  let component: FeatureComponent;
  let fixture: ComponentFixture<FeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureComponent, OptionListComponent, LetterPipe, RomanPipe ],
      imports: [ MaterialModule.forRoot(), FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureComponent);
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

  it('answers should be letters', () => {
    expect(component).toBeTruthy();
  });
});
