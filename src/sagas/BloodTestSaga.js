import { BloodTestTypes } from '../types';

import { put, call } from 'redux-saga/effects'

export function* getBloodTests(api) {
  try {
    const params = {
      page: 1,
      size: 10,
      sort: '-createdAt'
    }
    const response = yield call(api.getBloodTests, params)
    console.log('test', response)
    const bloodTests = response.data.items
    yield put({ type: BloodTestTypes.GET_BLOOD_TESTS_SUCCESS, bloodTests })
  } catch (err) {
    console.log(err)
    yield put({ type: BloodTestTypes.GET_BLOOD_TESTS_FAILURE })
  }
}

export function* getNearbyBloodTests(api, action) {
  const location = action.position;
  try {
    const params = {
      page: 1,
      size: 10,
      sort: '-createdAt',
      location
    }
    const response = yield call(api.getBloodTests, params)
    const nearbyBloodTests = response.data.items
    yield put({ type: BloodTestTypes.GET_NEARBY_BLOOD_TESTS_SUCCESS, nearbyBloodTests })
  } catch (err) {
    console.log(err)
    yield put({ type: BloodTestTypes.GET_NEARBY_BLOOD_TESTS_FAILURE })
  }
}