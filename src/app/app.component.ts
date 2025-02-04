import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { User, UserComponent } from "./components/user/user.component";
import { DUMMY_USERS } from './data/dummy-users';
import { TasksComponent } from "./components/tasks/tasks.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'udemy-project';
  users = DUMMY_USERS;
  selectedUser!:User;

  onSelectUser(user:User) {

    this.selectedUser = user;

  }
  
}
