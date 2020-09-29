import reducer, { INITIAL_STATE } from '../../store/modules/repositories/reducer';
import * as Repositories from '../../store/modules/repositories/actions';

describe('Repositories reducer', () => {
  it('DEFAULT', () => {
    const state = reducer(undefined, {});

    expect(state).toStrictEqual(INITIAL_STATE);
  });

  it('ADD_NEW_REPOSITORY', () => {
    const state = reducer(INITIAL_STATE, Repositories.addNewRepository('react-testing'));

    expect(state).toStrictEqual(['react-testing']);
  });
});
