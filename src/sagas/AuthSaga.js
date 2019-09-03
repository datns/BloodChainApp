import { AuthTypes } from "../types";
import axios from 'axios';

import { put, call } from 'redux-saga/effects'

export function* login(api, action) {
  try {
    const response = yield call(api.login, action.username, action.password)
    if (response.status === 200) {
      const { accessToken } = response.data
      yield put({ type: AuthTypes.LOGIN_SUCCESS, accessToken })

    }
  } catch (err) {
    yield put({ type: AuthTypes.LOGIN_FAILURE })
  }
}