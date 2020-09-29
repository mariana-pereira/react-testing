import produce from 'immer';

export const INITIAL_STATE = [];

export default function repositories(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'ADD_NEW_REPOSITORY':
        draft.push(action.payload.repository);
        break;
      default:
    }
  });
}
