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
);

export const todoReducer = (state: any, action: Action) => {
  return _todoReducer( state, action );
}
