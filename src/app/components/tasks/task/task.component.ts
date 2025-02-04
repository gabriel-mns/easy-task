import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  imports: [CommonModule, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  
  @Input({required:true}) task !: Task;

}