import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoAddComponent} from "../todo-add/todo-add.component";
import {TodoListComponent} from "../todo-list/todo-list.component";
import {TodoFooterComponent} from "../todo-footer/todo-footer.component";

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [CommonModule, TodoAddComponent, TodoListComponent, TodoFooterComponent],
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
