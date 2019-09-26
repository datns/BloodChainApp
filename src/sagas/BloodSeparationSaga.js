import { BloodSeparationTypes } from '../types';

import { put, call } from 'redux-saga/effects'

export function* getBloodSeparations(api) {
  try {
    const params = {
      page: 1,
      size: 10,
      sort: '-createdAt'
    }
    const response = yield call(api.getBloodSeparations, params)
    console.log('separation', response)
    const bloodSeparations = response.data.items
    yield put({ type: BloodSeparationTypes.GET_BLOOD_SEPARATIONS_SUCCESS, bloodSeparations })
  } catch (err) {
    console.log(err)
    yield put({ type: BloodSeparationTypes.GET_BLOOD_SEPARATIONS_FAILURE })
  }
}

export function* getNearbyBloodSeparations(api, action) {
  const location = action.position
  try {
    const params = {
      page: 1,
      size: 10,
      sort: '-createdAt',
      location
    }
    const response = yield call(api.getBloodSeparations, params)
    const nearbyBloodSeparations = response.data.items
    yield put({ type: BloodSeparationTypes.GET_NEARBY_BLOOD_SEPARATIONS_SUCCESS, nearbyBloodSeparations })
  } catch (err) {
    console.log(err)
    yield put({ type: BloodSeparationTypes.GET_NEARBY_BLOOD_SEPARATIONS_FAILURE })
  }
}