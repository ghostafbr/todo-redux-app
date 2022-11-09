import {createAction, props} from "@ngrx/store";

export type filterValid = 'all' | 'completed' | 'pending';

export const setFilter = createAction(
  '[Filter] Set Filter',
  props<{filter: filterValid}>()
);

