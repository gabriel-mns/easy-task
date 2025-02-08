import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from "./components/user/user.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { NewTaskComponent } from "./components/tasks/new-task/new-task.component";
import { TaskComponent } from "./components/tasks/task/task.component";
import { CardComponent } from "./components/shared/card/card.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent, 
        HeaderComponent, 
        UserComponent, 
        TasksComponent, 
        NewTaskComponent,
        TaskComponent,
        CardComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule{

}