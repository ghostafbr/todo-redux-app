import {Todo} from "./todos/models/todo.models";
import {ActionReducerMap} from "@ngrx/store";
import {todoReducer} from "./todos/todo.reducer";
import {filterReducer} from "./filter/filter.reducer";
import {filterValid} from "./filter/filter.actions";

export interface AppState {
    todos: Todo[];
    filter: filterValid;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
};
