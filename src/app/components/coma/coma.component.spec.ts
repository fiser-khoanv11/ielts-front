/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComaComponent } from './coma.component';

describe('ComaComponent', () => {
  let component: ComaComponent;
  let fixture: ComponentFixture<ComaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
