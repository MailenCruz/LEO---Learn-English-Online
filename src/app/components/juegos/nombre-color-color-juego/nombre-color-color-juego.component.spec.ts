import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreColorColorJuegoComponent } from './nombre-color-color-juego.component';

describe('NombreColorColorJuegoComponent', () => {
  let component: NombreColorColorJuegoComponent;
  let fixture: ComponentFixture<NombreColorColorJuegoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NombreColorColorJuegoComponent]
    });
    fixture = TestBed.createComponent(NombreColorColorJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
