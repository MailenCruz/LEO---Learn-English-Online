import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalabraImagenJuegoComponent } from './palabra-imagen-juego.component';

describe('PalabraImagenJuegoComponent', () => {
  let component: PalabraImagenJuegoComponent;
  let fixture: ComponentFixture<PalabraImagenJuegoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PalabraImagenJuegoComponent]
    });
    fixture = TestBed.createComponent(PalabraImagenJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
