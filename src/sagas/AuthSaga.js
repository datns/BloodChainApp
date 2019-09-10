import { AuthTypes } from '../types';

import { put, call } from 'redux-saga/effects'

export function* login(api, action) {
  try {
    const response = yield call(api.login, action.username, action.password)
    console.log('response', response)
    if (response.status === 200) {
      const { accessToken } = response.data
      yield call(api.setAccessToken, accessToken)
      yield put({ type: AuthTypes.LOGIN_SUCCESS, accessToken })

    }
  } catch (err) {
    console.log(err)
    yield put({ type: AuthTypes.LOGIN_FAILURE })
  }
}