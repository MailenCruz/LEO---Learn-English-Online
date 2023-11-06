import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelIntermedioGramaticaComponent } from './nivel-intermedio-gramatica.component';

describe('NivelIntermedioGramaticaComponent', () => {
  let component: NivelIntermedioGramaticaComponent;
  let fixture: ComponentFixture<NivelIntermedioGramaticaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelIntermedioGramaticaComponent]
    });
    fixture = TestBed.createComponent(NivelIntermedioGramaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
