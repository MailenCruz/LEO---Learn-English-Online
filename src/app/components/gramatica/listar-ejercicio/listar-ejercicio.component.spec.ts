import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEjercicioComponent } from './listar-ejercicio.component';

describe('ListarEjercicioComponent', () => {
  let component: ListarEjercicioComponent;
  let fixture: ComponentFixture<ListarEjercicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarEjercicioComponent]
    });
    fixture = TestBed.createComponent(ListarEjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
