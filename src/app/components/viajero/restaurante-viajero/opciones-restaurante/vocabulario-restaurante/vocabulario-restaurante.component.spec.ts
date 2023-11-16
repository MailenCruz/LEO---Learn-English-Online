import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularioRestauranteComponent } from './vocabulario-restaurante.component';

describe('VocabularioRestauranteComponent', () => {
  let component: VocabularioRestauranteComponent;
  let fixture: ComponentFixture<VocabularioRestauranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VocabularioRestauranteComponent]
    });
    fixture = TestBed.createComponent(VocabularioRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
