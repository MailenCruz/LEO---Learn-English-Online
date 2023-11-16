import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceVocaburarioAlojamientoComponent } from './multiple-choice-vocaburario-alojamiento.component';

describe('MultipleChoiceVocaburarioAlojamientoComponent', () => {
  let component: MultipleChoiceVocaburarioAlojamientoComponent;
  let fixture: ComponentFixture<MultipleChoiceVocaburarioAlojamientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleChoiceVocaburarioAlojamientoComponent]
    });
    fixture = TestBed.createComponent(MultipleChoiceVocaburarioAlojamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
