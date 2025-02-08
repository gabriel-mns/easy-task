import { Component } from '@angular/core';
import { DUMMY_USERS } from './data/dummy-users';
import { User } from './components/user/user.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone:  false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'Easy Task';
  users = DUMMY_USERS;
  selectedUser?:User;

  constructor (private titleService:Title) {

    this.titleService.setTitle(this.title);

  }

  onSelectUser(user:User) {

    this.selectedUser = user;

  }
  
}
