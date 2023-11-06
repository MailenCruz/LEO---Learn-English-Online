import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteViajeroComponent } from './restaurante-viajero.component';

describe('RestauranteViajeroComponent', () => {
  let component: RestauranteViajeroComponent;
  let fixture: ComponentFixture<RestauranteViajeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestauranteViajeroComponent]
    });
    fixture = TestBed.createComponent(RestauranteViajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
