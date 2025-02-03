import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from "./components/user/user.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'udemy-project';
}
