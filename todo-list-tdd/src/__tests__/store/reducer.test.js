import reducer, { INITIAL_STATE } from '../../store/modules/tasks/reducer';
import * as Tasks from '../../store/modules/tasks/actions';

describe('Tasks reducer', () => {
  it('ADD_TASK', () => {
    const state = reducer(INITIAL_STATE, Tasks.addTask('make coffee'));

    expect(state).toStrictEqual(['make coffee']);
  });
});