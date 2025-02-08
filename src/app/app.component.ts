import { Component } from '@angular/core';
import { DUMMY_USERS } from './data/dummy-users';
import { User } from './components/user/user.model';

@Component({
  selector: 'app-root',
  standalone:  false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'udemy-project';
  users = DUMMY_USERS;
  selectedUser?:User;

  onSelectUser(user:User) {

    this.selectedUser = user;

  }
  
}
