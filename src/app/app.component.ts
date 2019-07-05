import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTDD';
  myvar = 'Hola Mundo';

  par(numero: number) {
    return numero % 2 === 0 ? true : false;
  }
}
