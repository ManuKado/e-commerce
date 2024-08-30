import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEliminateProductComponent } from './add-eliminate-product.component';

describe('AddEliminateProductComponent', () => {
  let component: AddEliminateProductComponent;
  let fixture: ComponentFixture<AddEliminateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEliminateProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEliminateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
