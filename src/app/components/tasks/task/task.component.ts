import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-task',
  imports: [CommonModule, DatePipe, CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  
  @Input({required:true}) task !: Task;
  @Output() taskCompleted = new EventEmitter<string>();

  
  onTaskCompleted() {
    
    this.taskCompleted.emit(this.task.id);
    
  }

}