import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTemporalComponent } from './admin-temporal.component';

describe('AdminTemporalComponent', () => {
  let component: AdminTemporalComponent;
  let fixture: ComponentFixture<AdminTemporalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTemporalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTemporalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
