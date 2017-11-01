import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeJobQueryComponent } from './employee-job-query.component';

describe('EmployeeJobQueryComponent', () => {
  let component: EmployeeJobQueryComponent;
  let fixture: ComponentFixture<EmployeeJobQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeJobQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeJobQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
