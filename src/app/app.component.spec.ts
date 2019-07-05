import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

// Describe brevemente que se va probar
describe('AppComponent', () => {

  // ciclo de vida de las pruebas
  // *1: afterAll => se ejecuta 1 sola vez despues de ejecutar los casos de prueba
  // *2: afterEach => se ejecuta despues de cada it
  // *3: beforeEach => se ejecuta antes de cada it
  // *4: beforeAll => se ejecuta 1 sola vez antes de ejecutar los casos de prueba

  let appComponent;

  beforeAll(() => {
    console.log('Se ejecuta al iniciar las pruebas');
  })

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    // *->
    appComponent = new AppComponent();
    console.log('beforeEach');
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('El valor de myVar debe ser hola Mundo', () => {
    const valor = appComponent.myvar;
    expect(valor).toEqual('Hola Mundo');
  });

  afterEach(() => {
    console.log('afterEach');
  });

  afterAll(() => {
    console.log('Se ejecuta al terminar las pruebas');
  })


});
