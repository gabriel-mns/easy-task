import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type NewTask } from '../task/task.model';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  // imports: [FormsModule],
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {

  @Input({required:true}) userId!: string;

  @Output() closeDialog = new EventEmitter<void>();
  @Output() newTask     = new EventEmitter<NewTask>();
  
  constructor(private tasksService: TasksService) { }

  enteredTitle  : string = "";
  enteredSummary: string = "";
  enteredDueDate: string = "";

  onCloseDialog() {

    this.closeDialog.emit();
    
  }

  onSubmit() {

    this.tasksService.addTask({
      title  : this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    }, this.userId);

    this.closeDialog.emit();

  }

}
