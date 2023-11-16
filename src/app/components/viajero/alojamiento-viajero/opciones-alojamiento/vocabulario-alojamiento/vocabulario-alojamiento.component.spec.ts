import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularioAlojamientoComponent } from './vocabulario-alojamiento.component';

describe('VocabularioAlojamientoComponent', () => {
  let component: VocabularioAlojamientoComponent;
  let fixture: ComponentFixture<VocabularioAlojamientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VocabularioAlojamientoComponent]
    });
    fixture = TestBed.createComponent(VocabularioAlojamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
