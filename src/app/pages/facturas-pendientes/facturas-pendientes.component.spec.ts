import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasPendientesComponent } from './facturas-pendientes.component';

describe('FacturasPendientesComponent', () => {
  let component: FacturasPendientesComponent;
  let fixture: ComponentFixture<FacturasPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturasPendientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturasPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
