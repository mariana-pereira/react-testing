import { runSaga } from 'redux-saga';
import { getRepositoriesSuccess } from '../../store/modules/repositories/actions';
import { getRepositories } from '../../store/modules/repositories/sagas';

describe('Repositories saga', () => {
  it('should be able to fetch repositories', async () => {
    const dispatch = jest.fn();

    await runSaga({ dispatch }, getRepositories).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getRepositoriesSuccess(['react-testing']));
  });
});
