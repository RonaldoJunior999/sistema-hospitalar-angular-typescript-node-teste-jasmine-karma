import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPacienteComponent } from './dashboard-paciente.component';

describe('DashboardPacienteComponent', () => {
  let component: DashboardPacienteComponent;
  let fixture: ComponentFixture<DashboardPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPacienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
