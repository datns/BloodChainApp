import { BloodCampTypes } from '../types';

import { put, call } from 'redux-saga/effects'

export function* getBloodCamps(api) {
  try {
    const params = {
      page: 1,
      size: 10,
      sort: '-createdAt',
    }
    const response = yield call(api.getBloodCamps, params)
    const bloodCamps = response.data.items
    yield put({ type: BloodCampTypes.GET_BLOOD_CAMPS_SUCCESS, bloodCamps })
  } catch (err) {
    yield put({ type: BloodCampTypes.GET_BLOOD_CAMPS_FAILURE })
  }
}

export function* getNearbyBloodCamps(api, action) {
  try {
    const { position } = action
    const params = {
      page: 1,
      size: 10,
      sort: '-createdAt',
      location: position
    }
    const response = yield call(api.getBloodCamps, params)
    console.log('response', response)
    const nearbyBloodCamps = response.data.items
    yield put({ type: BloodCampTypes.GET_NEARBY_BLOOD_CAMPS_SUCCESS, nearbyBloodCamps })
  } catch (err) {
    yield put({ type: BloodCampTypes.GET_NEARBY_BLOOD_CAMPS_FAILURE })
  }
}