import reducer, { INITIAL_STATE } from '../../store/modules/tasks/reducer';
import * as Tasks from '../../store/modules/tasks/actions';

describe('Tasks reducer', () => {
  it('DEFAULT', () => {
    const state = reducer(undefined, {});

    expect(state).toStrictEqual(INITIAL_STATE);
  });

  it('ADD_TASK', () => {
    const state = reducer(INITIAL_STATE, Tasks.addTask('make coffee'));

    expect(state).toStrictEqual(['make coffee']);
  });
});