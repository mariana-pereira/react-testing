import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { getTasksSuccess, getTasksFailure } from './actions';

export function* getTasks() {
  try {
    const response = yield call(api.get, 'tasks');

    yield put(getTasksSuccess(response.data));
  } catch (error) {
    yield put(getTasksFailure());
  }
}