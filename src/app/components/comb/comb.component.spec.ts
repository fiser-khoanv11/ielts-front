/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CombComponent } from './comb.component';

describe('CombComponent', () => {
  let component: CombComponent;
  let fixture: ComponentFixture<CombComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
