/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableComponent } from './table.component';

import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      imports: [ MaterialModule.forRoot(), FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;

    component.data = {
      "first": 9,
      "last": 13,
      "type": "table",
      "directions": [
        "Complete the table below.",
        "Write <b>ONE WORD AND/OR A NUMBER</b> for each answer."
      ],
      "table": [
        [
          ["Stepwell"],
          ["Date"],
          ["Features"],
          ["Other notes"]
        ],
        [
          ["Rani Ki Vav"],
          ["Late 11th century"],
          ["As many as 500 sculptures decorate the monument"],
          ["Restored in the 1960s", "Excellent condition, despite the [] of 2001"]
        ]
      ]
    }


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('answers should be collected', () => {
    expect(component).toBeTruthy();
  });
});
