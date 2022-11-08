import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {AppState} from "../../app.reducer";
import {Store} from "@ngrx/store";
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  public txtInput: FormControl;

  constructor( private store: Store<AppState> ) {
    this.txtInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
  }

  addTodo() {
    if ( this.txtInput.invalid ) { return; }
    this.store.dispatch(actions.create({text: this.txtInput.value}));
    this.txtInput.reset();
  }

}
