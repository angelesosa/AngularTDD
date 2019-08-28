import { UserService } from './service/user.service';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { of } from 'rxjs';
import { User } from 'src/app/service/user.interface';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

// *** PROBANDO SERVICIOS HTTTP ****

// Creamos el servicio
// 1. $ ng g s service/user
// 2. importamos en servicio en nuestro modulo
// 3. revisamos el servicio que vamos a consumir https://developer.github.com/v3/users/#get-all-users
// o pedirle a los de backend que te den la firma (que es un item del array del json de respuesta)
// 4. creamos la interface de la firma
// 5. En service.spec seguimos programandp


xdescribe('AppComponent', () => {

  let appComponent;
  let userService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        AppComponent,
        UserService
      ]
    }).compileComponents();
    // *->
    appComponent = TestBed.get(AppComponent);
    userService = TestBed.get(UserService);
  }));

  it('Debe llamar a UserService y al metodo getAll() para obtener los usuarios', () => {

    let mockUser: User[] = [
      {
        login: "simonjefford",
        id: 136,
        node_id: "MDQ6VXNlcjEzNg==",
        avatar_url: "https://avatars2.githubusercontent.com/u/136?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/simonjefford",
        html_url: "https://github.com/simonjefford",
        followers_url: "https://api.github.com/users/simonjefford/followers",
        following_url: "https://api.github.com/users/simonjefford/following{/other_user}",
        gists_url: "https://api.github.com/users/simonjefford/gists{/gist_id}",
        starred_url: "https://api.github.com/users/simonjefford/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/simonjefford/subscriptions",
        organizations_url: "https://api.github.com/users/simonjefford/orgs",
        repos_url: "https://api.github.com/users/simonjefford/repos",
        events_url: "https://api.github.com/users/simonjefford/events{/privacy}",
        received_events_url: "https://api.github.com/users/simonjefford/received_events",
        type: "User",
        site_admin: false
      },
      {
        login: "josh",
        id: 137,
        node_id: "MDQ6VXNlcjEzNw==",
        avatar_url: "https://avatars2.githubusercontent.com/u/137?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/josh",
        html_url: "https://github.com/josh",
        followers_url: "https://api.github.com/users/josh/followers",
        following_url: "https://api.github.com/users/josh/following{/other_user}",
        gists_url: "https://api.github.com/users/josh/gists{/gist_id}",
        starred_url: "https://api.github.com/users/josh/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/josh/subscriptions",
        organizations_url: "https://api.github.com/users/josh/orgs",
        repos_url: "https://api.github.com/users/josh/repos",
        events_url: "https://api.github.com/users/josh/events{/privacy}",
        received_events_url: "https://api.github.com/users/josh/received_events",
        type: "User",
        site_admin: true
      }
    ];

    const users = spyOn(userService, 'getAll').and.callFake( users => {
      console.log('users - spyon', users);
      return of(mockUser);
    });

    appComponent.ngOnInit();

    expect(users).toHaveBeenCalled();

  });

});
