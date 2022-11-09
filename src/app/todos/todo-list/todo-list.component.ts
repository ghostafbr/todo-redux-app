import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoItemComponent} from "../todo-item/todo-item.component";
import {Todo} from "../models/todo.models";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";
import {FilterPipe} from "../filter.pipe";
import {filterValid} from "../../filter/filter.actions";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, FilterPipe],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos: Todo[] = [];
  public actualFilter: filterValid;

  constructor( private store: Store<AppState> ) {
    this.actualFilter = 'all';
  }

  ngOnInit(): void {
    /*this.store.select('todos').subscribe( todos => this.todos = todos );*/
    this.store.subscribe( ({todos, filter}) => {
      this.todos = todos;
      this.actualFilter = filter;
    });
  }

}
