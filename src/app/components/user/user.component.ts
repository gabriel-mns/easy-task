import { Component, computed, EventEmitter, Input, Output, signal} from '@angular/core';
import { DUMMY_USERS } from '../../data/dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  @Input({required:true}) user!:User;
  @Output() select = new EventEmitter();

  onSelectUser() { 

    this.select.emit(this.user);

  }

  get avatar(){

    return `assets/images/jpg/users/${this.user.avatar}`;

  }

}

export interface User{

  id:string,
  name:string,
  avatar:string

}