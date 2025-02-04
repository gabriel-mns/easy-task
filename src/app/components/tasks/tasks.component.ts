import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from '../../data/dummy-tasks';
import { User } from '../user/user.model';
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  @Input({required:true}) user!:User;
  dummyTasks = DUMMY_TASKS;
  showNewTaskForm: boolean = false;

  get tasks(){

    return this.dummyTasks.filter(task => task.userId === this.user?.id);

  }

  onTaskCompleted(taskId:string) {

    this.dummyTasks = this.dummyTasks.filter(task => task.id !== taskId);

  }

  onNewTaskClick(){
  
    this.showNewTaskForm = true;

  }

  onCloseDialog(){

    this.showNewTaskForm = false;

  }

}

