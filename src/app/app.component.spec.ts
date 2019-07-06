import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

// *** PROBANDO SERVICIOS HTTTP ****

// Creamos el servicio
// 1. $ ng g s service/user
// 2. importamos en servicio en nuestro modulo
// 3. revisamos el servicio que vamos a consumir https://developer.github.com/v3/users/#get-all-users
// o pedirle a los de backend que te den la firma (que es un item del array del json de respuesta)
// 4. creamos la interface de la firma
// 5. En service.spec seguimos programandp


describe('AppComponent', () => {

  let appComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    // *->
    appComponent = new AppComponent();
  }));


});
