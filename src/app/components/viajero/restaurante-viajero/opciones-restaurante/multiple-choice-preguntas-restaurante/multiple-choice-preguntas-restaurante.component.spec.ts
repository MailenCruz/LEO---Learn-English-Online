import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoicePreguntasRestauranteComponent } from './multiple-choice-preguntas-restaurante.component';

describe('MultipleChoicePreguntasRestauranteComponent', () => {
  let component: MultipleChoicePreguntasRestauranteComponent;
  let fixture: ComponentFixture<MultipleChoicePreguntasRestauranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleChoicePreguntasRestauranteComponent]
    });
    fixture = TestBed.createComponent(MultipleChoicePreguntasRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
