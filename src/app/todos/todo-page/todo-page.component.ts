import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoAddComponent} from "../todo-add/todo-add.component";
import {TodoListComponent} from "../todo-list/todo-list.component";
import {TodoFooterComponent} from "../todo-footer/todo-footer.component";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";
import * as actions from "../todo.actions";

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [CommonModule, TodoAddComponent, TodoListComponent, TodoFooterComponent],
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  private completed: boolean;
  constructor(private store: Store<AppState>) {
    this.completed = false;
  }

  ngOnInit(): void {
  }

  toggleAll() {
    this.completed = !this.completed;
    this.store.dispatch(actions.toggleAll( {completed: this.completed} ));
  }

}
