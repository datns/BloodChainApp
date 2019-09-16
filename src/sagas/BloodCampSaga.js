import { BloodCampTypes } from '../types';

import { put, call } from 'redux-saga/effects'

export function* getBloodCamps(api) {
  try {
    const params = {
      page: 1,
      size: 10,
      sort: '-createdAt'
    }
    const response = yield call(api.getBloodCamps, params)
    console.log(response)
    const bloodCamps = response.data.items
    yield put({ type: BloodCampTypes.GET_BLOOD_CAMPS_SUCCESS, bloodCamps })
  } catch (err) {
    console.log(err)
    yield put({ type: BloodCampTypes.GET_BLOOD_CAMPS_FAILURE })
  }
}