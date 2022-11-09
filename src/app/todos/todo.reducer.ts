import {Action, createReducer, on} from '@ngrx/store';
import * as actions from './todo.actions';
import {Todo} from "./models/todo.models";

export const initialState: Todo[] = [
  new Todo('Learn Angular'),
  new Todo('Learn React'),
  new Todo('Learn Vue'),
  new Todo('Learn Node')
];

export const _todoReducer = createReducer(
  initialState,
  on(actions.create, (state, { text }) => [...state, new Todo(text)]),
  on( actions.toggle, (state, { id }) => {
    return state.map( todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo;
      }
    });
  }),
  on( actions.edit, (state, { id, text }) => {
    return state.map( todo => {
      if (todo.id === id) {
        return {
          ...todo,
          text
        }
      } else {
        return todo;
      }
    });
  }),
  on( actions.remove, (state, { id }) => state.filter( todo => todo.id !== id)),
  on( actions.toggleAll, (state, { completed }) => state.map( todo => {
      return {
        ...todo,
        completed
      }
    }),
  ),
);


export const todoReducer = (state: any, action: Action) => {
  return _todoReducer( state, action );
}
