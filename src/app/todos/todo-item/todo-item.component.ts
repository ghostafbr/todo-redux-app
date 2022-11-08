import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Todo} from "../models/todo.models";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";

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

  constructor() {
    this.todo = new Todo('');
    this.chkComplete = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text);
    this.physicalInput = new ElementRef(null);
  }

  ngOnInit(): void {
    this.chkComplete = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);
  }

  edit() {
    this.editing = true;
    setTimeout(() => {
      this.physicalInput.nativeElement.select();
    }, 1);
  }

  finishEdit() {
    this.editing = false;
  }
}
