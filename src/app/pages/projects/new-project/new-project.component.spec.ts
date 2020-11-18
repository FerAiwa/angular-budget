import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewProjectComponent } from './new-project.component';

/*
 * 12 - Prueba de un formulario template driven
 * Mucha interacción con la template
 * Dificultad de pruebas detalladas
 * Los model driven, son más sencillos +ts -html
 */

describe('NewProjectComponent', () => {
  let component: NewProjectComponent;
  let fixture: ComponentFixture<NewProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewProjectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
