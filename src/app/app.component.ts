import { Component } from '@angular/core';
import {FooterComponent} from "./footer/footer.component";
import {TodoPageComponent} from "./todos/todo-page/todo-page.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    FooterComponent,
    TodoPageComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoapp';
}
