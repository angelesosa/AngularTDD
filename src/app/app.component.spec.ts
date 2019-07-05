import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

// Describe brevemente que se va probar
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

  it('Debe retornar TRUE', () => {
    const appcomp = new AppComponent();
    const respuesta = appcomp.par(44);
    expect(respuesta).toBeTruthy();
  });

  it('Debe retornar FALSE', () => {
    const appcomp = new AppComponent();
    const respuesta = appcomp.par(15);
    expect(respuesta).toBeFalsy();
  });

});
