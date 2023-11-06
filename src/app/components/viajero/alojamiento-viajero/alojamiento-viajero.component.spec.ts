import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlojamientoViajeroComponent } from './alojamiento-viajero.component';

describe('AlojamientoViajeroComponent', () => {
  let component: AlojamientoViajeroComponent;
  let fixture: ComponentFixture<AlojamientoViajeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlojamientoViajeroComponent]
    });
    fixture = TestBed.createComponent(AlojamientoViajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
