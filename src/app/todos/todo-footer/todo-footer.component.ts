import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";
import * as actions from "../../filter/filter.actions";
import {clearCompleted} from "../todo.actions";

@Component({
  selector: 'app-todo-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  public actualFilter: actions.filterValid  = 'all';
  public filters: actions.filterValid[] = ['all', 'completed', 'pending'];
  public pendings: number = 0;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    /*this.store.select('filter').subscribe( filter => this.actualFilter = filter);*/
    this.store.subscribe( state => {
      this.actualFilter = state.filter;
      this.pendings = state.todos.filter( todo => !todo.completed ).length;
    });
  }

  changeFilter( filter: actions.filterValid ): void {
    this.store.dispatch( actions.setFilter({filter: filter}) );
  }

  clearCompleted(): void {
    this.store.dispatch( clearCompleted() );
  }
}
