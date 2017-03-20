/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RTableComponent } from './r-table.component';

describe('TableComponent', () => {
  let component: RTableComponent;
  let fixture: ComponentFixture<RTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
