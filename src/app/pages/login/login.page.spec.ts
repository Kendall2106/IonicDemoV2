import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('debería devolver true para un índice válido con credenciales de administrador', () => {
    const index = 0;
    component.name = 'A';
    component.password = 'A';
    // Prueba
    const resultado = component.login(index);
    expect(resultado).toBe(true);
  });

  it('debería devolver false para un índice válido con credenciales no válidas', () => {
    const index = 0;
    component.name = 'A';
    component.password = 'contraseñaIncorrecta';
    // Prueba
    const resultado = component.login(index);
    // Afirmación
    expect(resultado).toBe(false);
  });

});
