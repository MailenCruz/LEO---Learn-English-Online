import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalabraPalabraJuegoComponent } from './palabra-palabra-juego.component';

describe('PalabraPalabraJuegoComponent', () => {
  let component: PalabraPalabraJuegoComponent;
  let fixture: ComponentFixture<PalabraPalabraJuegoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PalabraPalabraJuegoComponent]
    });
    fixture = TestBed.createComponent(PalabraPalabraJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
