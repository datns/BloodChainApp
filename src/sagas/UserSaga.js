import { UserTypes } from '../types';

import { put, call } from 'redux-saga/effects'

export function* getUserInfo(api) {
  try {
    const response = yield call(api.getUserInfo)
    console.log('user', response)
    const user = response.data;
    yield put({ type: UserTypes.GET_USER_INFO_SUCCESS, user })
  } catch (err) {
    yield put({ type: UserTypes.GET_USER_INFO_FAILURE })
  }
}