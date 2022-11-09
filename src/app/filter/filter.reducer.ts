import {Action, createReducer, on} from "@ngrx/store";
import {setFilter, filterValid} from "./filter.actions";

export const initialState: filterValid = 'all';

const _filterReducer = createReducer<filterValid, Action>(initialState,
  on(setFilter, (state, {filter}) => filter),
);

export function filterReducer(state: any, action: Action) {
  return _filterReducer(state, action);
}

