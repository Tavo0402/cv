import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationWorkHistoryComponent } from './education-work-history.component';

describe('EducationWorkHistoryComponent', () => {
  let component: EducationWorkHistoryComponent;
  let fixture: ComponentFixture<EducationWorkHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationWorkHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationWorkHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
