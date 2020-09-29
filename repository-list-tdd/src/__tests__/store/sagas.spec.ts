import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '../../services/api';

import { getRepositoriesSuccess, getRepositoriesFailure } from '../../store/modules/repositories/actions';
import { getRepositories } from '../../store/modules/repositories/sagas';

const apiMock = new MockAdapter(api);

describe('Repositories saga', () => {
  it('should be able to fetch repositories', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('repositories').reply(200, ['react-testing']);

    await runSaga({ dispatch }, getRepositories).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getRepositoriesSuccess(['react-testing']));
  });

  it('should fail when api returns error', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('repositories').reply(500);

    await runSaga({ dispatch }, getRepositories).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getRepositoriesFailure());
  });
});
