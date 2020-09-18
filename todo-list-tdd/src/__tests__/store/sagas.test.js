import { runSaga } from 'redux-saga';

import { getTasksSuccess } from '../../store/modules/tasks/actions';
import { getTasks } from '../../store/modules/tasks/sagas';

describe('Tasks saga', () => {
  it('should be able to fetch tasks', async () => {
    const dispatch = jest.fn();

    await runSaga({ dispatch }, getTasks).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getTasksSuccess(['make coffee']));
  });
});