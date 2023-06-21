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
    // Configuración
    const index = 0; // Índice válido para el usuario "admin" en Utils.users
    component.name = 'admin';
    component.password = 'admin';

    // Prueba
    const resultado = component.login(index);

    // Afirmación
    expect(resultado).toBe(true);
  });

  it('debería devolver false para un índice válido con credenciales no válidas', () => {
    // Configuración
    const index = 0; // Índice válido para el usuario "admin" en Utils.users
    component.name = 'usuario';
    component.password = 'contraseñaIncorrecta';

    // Prueba
    const resultado = component.login(index);

    // Afirmación
    expect(resultado).toBe(false);
  });

});
