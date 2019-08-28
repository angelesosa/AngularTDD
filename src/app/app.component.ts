import { User } from './service/user.interface';
import { UserService } from './service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularTDD';
  myvar = 'Hola Mundo';
  users: User[] = [];

  constructor(
    private service: UserService
  ) {

  }

  ngOnInit() {
    this.getUsers();
  }

  par(numero: number) {
    return numero % 2 === 0 ? true : false;
  }

  getUsers() {
    this.service.getAll().subscribe(users => {
      this.users = users;
    });
  }
}
