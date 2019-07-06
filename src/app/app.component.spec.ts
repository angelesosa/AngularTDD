import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

// Para agregar el focus basta con agregar la f antes del metodo:
// - Describe => que es para probar todos los casos de prueba que se encuentre dentro
// - it => que es para probar solamente ese caso de prueba en especifico

describe('AppComponent', () => {

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

  // agregamos 'f' de focus
  fit('should create the app', () => {
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
