import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceVocabularioRestauranteComponent } from './multiple-choice-vocabulario-restaurante.component';

describe('MultipleChoiceVocabularioRestauranteComponent', () => {
  let component: MultipleChoiceVocabularioRestauranteComponent;
  let fixture: ComponentFixture<MultipleChoiceVocabularioRestauranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleChoiceVocabularioRestauranteComponent]
    });
    fixture = TestBed.createComponent(MultipleChoiceVocabularioRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
