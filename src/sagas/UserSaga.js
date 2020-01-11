import { UserTypes } from '../types';

import { put, call } from 'redux-saga/effects';

import I18n from "i18n-js";
import AsyncStorage from '@react-native-community/async-storage';

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

export function* setLanguage(api, action) {
  try {
    I18n.locale = action.language;
    yield call(AsyncStorage.setItem('language', action.language))
  } catch (err) {
    console.log(err);
  }
}