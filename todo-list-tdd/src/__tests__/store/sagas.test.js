import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '../../services/api';

import { getTasksSuccess, getTasksFailure } from '../../store/modules/tasks/actions';
import { getTasks } from '../../store/modules/tasks/sagas';

const apiMock = new MockAdapter(api);

describe('Tasks saga', () => {
  it('should be able to fetch tasks', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('tasks').reply(200, ['make coffee']);

    await runSaga({ dispatch }, getTasks).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getTasksSuccess(['make coffee']));
  });

  it('should fail when api returns error', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('tasks').reply(500);

    await runSaga({ dispatch }, getTasks).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getTasksFailure());
  });
});