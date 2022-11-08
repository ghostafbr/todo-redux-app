import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
