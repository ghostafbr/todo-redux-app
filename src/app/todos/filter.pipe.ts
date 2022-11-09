import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from "./models/todo.models";

@Pipe({
  name: 'filterTodo',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: string): Todo[] {
    console.log('filterTodo', todos, filter);
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'pending':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }
}
