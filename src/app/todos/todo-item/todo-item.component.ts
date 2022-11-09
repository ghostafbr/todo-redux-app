import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Todo} from "../models/todo.models";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";
import * as actions from "../todo.actions";

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('physicalInput') physicalInput: ElementRef;
  chkComplete: FormControl;
  txtInput: FormControl;

  editing: boolean = false;

  constructor( private store: Store<AppState> ) {
    this.todo = new Todo('');
    this.chkComplete = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text);
    this.physicalInput = new ElementRef(null);
  }

  ngOnInit(): void {
    this.chkComplete = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chkComplete.valueChanges.subscribe(value => {
      console.log(value);
      this.store.dispatch(actions.toggle({id: this.todo.id}));
    });
  }

  edit() {
    this.editing = true;
    this.txtInput.setValue(this.todo.text);
    setTimeout(() => {
      this.physicalInput.nativeElement.select();
    }, 1);
  }

  finishEdit() {
    this.editing = false;
    if (this.txtInput.invalid || this.txtInput.value === this.todo.text) {
      return;
    }
    this.store.dispatch(actions.edit({id: this.todo.id, text: this.txtInput.value}));
  }

  remove() {
    this.store.dispatch(actions.remove({id: this.todo.id}));
  }
}
