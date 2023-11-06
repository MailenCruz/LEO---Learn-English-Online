import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelAvanzadoGramaticaComponent } from './nivel-avanzado-gramatica.component';

describe('NivelAvanzadoGramaticaComponent', () => {
  let component: NivelAvanzadoGramaticaComponent;
  let fixture: ComponentFixture<NivelAvanzadoGramaticaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelAvanzadoGramaticaComponent]
    });
    fixture = TestBed.createComponent(NivelAvanzadoGramaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
