import { UserTypes } from '../types';

import { put, call } from 'redux-saga/effects'

export function* getUserInfo(api) {
  try {
    const response = yield call(api.getUserInfo)
    const user = response.data;
    yield put({ type: UserTypes.GET_USER_INFO_SUCCESS, user })
  } catch (err) {
    yield put({ type: UserTypes.GET_USER_INFO_FAILURE })
  }
}

export function* getUserPoint(api) {
  try {
    const response = yield call(api.getUserPoint)
    const point = response.data.point
    yield put({ type: UserTypes.GET_USER_POINT_SUCCESS, point })
  } catch (err) {
    console.log(err)
    yield put({ type: UserTypes.GET_USER_POINT_FAILURE })
  }
}

export function* getPointHistories(api) {
  try {
    const response = yield call(api.getPointHistories)
    const pointHistories = response.data;
    yield put({ type: UserTypes.GET_POINTS_HISTORIES_SUCCESS, pointHistories })
  }
  catch (err) {
    console.log(err);
    yield put({ type: UserTypes.GET_POINTS_HISTORIES_FAILURE })
  }
}