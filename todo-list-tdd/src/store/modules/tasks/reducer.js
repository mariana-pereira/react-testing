import { produce } from 'immer';

export const INITIAL_STATE = [];

export default function tasks(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch(action.type) {
      case 'ADD_TASK': 
        draft.push(action.payload.task);
        break;
      default:
    }
  });
}