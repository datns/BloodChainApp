import { BloodTestTypes } from '../types';

import { put, call, select } from 'redux-saga/effects'

export const getCurrentLocations = (state) => state.bloodTest && state.bloodTest.bloodTests
export function* getBloodTests(api, action) {
  try {
    const { page } = action
    const currents = yield select(getCurrentLocations)
    const params = {
      page,
      size: 5,
      sort: '-createdAt'
    }
    const response = yield call(api.getBloodTests, params)
    const bloodTests = page === 1 ? [...response.data.items] : [...currents, ...response.data.items]
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

export function* getBloodTestsByName(api, action) {
  try {
    const { name } = action;
    const params = {
      page: 1,
      size: 10,
      sort: '-createdAt',
      name
    }
    const response = yield call(api.getBloodTests, params)
    const searchBloodTests = response.data.items
    yield put({ type: BloodTestTypes.GET_BLOOD_TESTS_BY_NAME_SUCCESS, searchBloodTests })
  }
  catch (err) {
    yield put({ type: BloodTestTypes.GET_BLOOD_TESTS_BY_NAME_FAILURE })
  }
}