import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { getRepositoriesSuccess, getRepositoriesFailure } from './actions';

export function* getRepositories() {
  try {
    const response = yield call(api.get, 'repositories');

    yield put(getRepositoriesSuccess(response.data));
  } catch (error) {
    yield put(getRepositoriesFailure());
  }
}
