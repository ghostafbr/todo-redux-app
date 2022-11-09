import {createAction, props} from '@ngrx/store';

export const create = createAction(
    '[Todo] Create Todo',
  props<{ text: string }>()
);

export const toggle = createAction(
    '[Todo] Toggle Todo',
  props<{ id: number }>()
);

export const edit = createAction(
    '[Todo] Edit Todo',
  props<{ id: number, text: string }>()
);

export const remove = createAction(
    '[Todo] Remove Todo',
  props<{ id: number }>()
);

export const toggleAll = createAction(
    '[Todo] Toggle All Todo',
  props<{ completed: boolean }>()
);

export const clearCompleted = createAction(
    '[Todo] Clear Completed Todo'
);
