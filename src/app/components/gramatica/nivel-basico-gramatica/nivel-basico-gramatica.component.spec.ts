import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelBasicoGramaticaComponent } from './nivel-basico-gramatica.component';

describe('NivelBasicoGramaticaComponent', () => {
  let component: NivelBasicoGramaticaComponent;
  let fixture: ComponentFixture<NivelBasicoGramaticaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelBasicoGramaticaComponent]
    });
    fixture = TestBed.createComponent(NivelBasicoGramaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
