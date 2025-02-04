import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {

  @Output() closeDialog = new EventEmitter<void>();
  @Output() newTask = new EventEmitter<NewTask>();

  enteredTitle  : string = "";
  enteredSummary: string = "";
  enteredDueDate: string = "";

  onCloseDialog() {

    this.closeDialog.emit();
    
  }

  onSubmit() {

    this.newTask.emit({
      title  : this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    });

  }

}
