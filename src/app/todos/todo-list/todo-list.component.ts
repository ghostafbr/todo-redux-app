import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoItemComponent} from "../todo-item/todo-item.component";
import {Todo} from "../models/todo.models";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos: Todo[] = [];

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.store.select('todos').subscribe( todos => this.todos = todos );
  }

}
