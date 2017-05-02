import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIeltsComponent } from './about-ielts.component';

describe('AboutIeltsComponent', () => {
  let component: AboutIeltsComponent;
  let fixture: ComponentFixture<AboutIeltsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutIeltsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutIeltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
