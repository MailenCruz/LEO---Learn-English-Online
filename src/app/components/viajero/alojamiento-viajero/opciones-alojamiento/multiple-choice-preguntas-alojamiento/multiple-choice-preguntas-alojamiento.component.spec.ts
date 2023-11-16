import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoicePreguntasAlojamientoComponent } from './multiple-choice-preguntas-alojamiento.component';

describe('MultipleChoicePreguntasAlojamientoComponent', () => {
  let component: MultipleChoicePreguntasAlojamientoComponent;
  let fixture: ComponentFixture<MultipleChoicePreguntasAlojamientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleChoicePreguntasAlojamientoComponent]
    });
    fixture = TestBed.createComponent(MultipleChoicePreguntasAlojamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
