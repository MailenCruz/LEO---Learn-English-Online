import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingViajeroComponent } from './shopping-viajero.component';

describe('ShoppingViajeroComponent', () => {
  let component: ShoppingViajeroComponent;
  let fixture: ComponentFixture<ShoppingViajeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingViajeroComponent]
    });
    fixture = TestBed.createComponent(ShoppingViajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
