import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { User } from '../user/user.model';
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTask } from './task/task.model';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  @Input({required:true}) user!:User;
  showNewTaskForm: boolean = false;

  constructor(private tasksService: TasksService) { }

  get tasks(){

    return this.tasksService.getUserTasks(this.user.id);

  }

  onNewTaskOpen(){
  
    this.showNewTaskForm = true;

  }

  onCloseDialog(){

    this.showNewTaskForm = false;

  }

}

