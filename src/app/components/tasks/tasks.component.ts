import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from '../../data/dummy-tasks';
import { User } from '../user/user.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  @Input({required:true}) user!:User;

  get tasks(){

    return DUMMY_TASKS.filter(task => task.userId === this.user?.id);

  }

}

