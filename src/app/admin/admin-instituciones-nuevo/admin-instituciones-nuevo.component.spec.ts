import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInstitucionesNuevoComponent } from './admin-instituciones-nuevo.component';

describe('AdminInstitucionesNuevoComponent', () => {
  let component: AdminInstitucionesNuevoComponent;
  let fixture: ComponentFixture<AdminInstitucionesNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInstitucionesNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInstitucionesNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
