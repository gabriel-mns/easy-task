import { Component, EventEmitter, Input, Output} from '@angular/core';
import { User } from '../user/user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  @Input({required:true}) user!:User;
  @Input({required:true}) isSelected!:boolean;
  @Output() select = new EventEmitter();

  onSelectUser() { 

    this.select.emit(this.user);

  }

  get avatar(){

    return `assets/images/jpg/users/${this.user.avatar}`;

  }

}
