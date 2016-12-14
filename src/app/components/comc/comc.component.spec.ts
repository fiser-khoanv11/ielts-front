/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComcComponent } from './comc.component';

describe('ComcComponent', () => {
  let component: ComcComponent;
  let fixture: ComponentFixture<ComcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
