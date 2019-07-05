import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // desarrollando el primer caso de prueba
  // Probando igualdad
  it('El valor de myVar debe ser hola Mundo', () => {
    const appComponent = new AppComponent();
    const valor = appComponent.myvar;
    expect(valor).toEqual('Hola Mundo');
  });

  // Probando coincidencia
  it('La variable debe contener Angular', () => {
    const appComponent = new AppComponent();
    const valor = appComponent.saludo;
    expect(valor).toContain('Angular');
  });

});
