import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavViajeroComponent } from './nav-viajero.component';

describe('NavViajeroComponent', () => {
  let component: NavViajeroComponent;
  let fixture: ComponentFixture<NavViajeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavViajeroComponent]
    });
    fixture = TestBed.createComponent(NavViajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
