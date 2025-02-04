import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../data/dummy-tasks';
import { NewTask } from '../components/tasks/task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks = DUMMY_TASKS;

  constructor() { }

  getUserTasks(userId: string){

    return this.tasks.filter(task => task.userId === userId);

  }

  removeTask(taskId: string){

    this.tasks = this.tasks.filter(task => task.id !== taskId);

  }

  addTask(newTask:NewTask, userId: string){

    this.tasks.unshift({
      id: Math.random().toString(),
      userId: userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate
    });

  }

}
