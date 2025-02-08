import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from "./components/user/user.component";
import { DUMMY_USERS } from './data/dummy-users';
import { TasksComponent } from "./components/tasks/tasks.component";
import { User } from './components/user/user.model';
import { NewTaskComponent } from "./components/tasks/new-task/new-task.component";

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
