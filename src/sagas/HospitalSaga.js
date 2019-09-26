import { HospitalTypes } from '../types';

import { put, call } from 'redux-saga/effects'

export function* getHospitals(api) {
  try {
    const params = {
      page: 1,
      size: 10,
      sort: '-createdAt'
    }
    const response = yield call(api.getHospitals, params)
    console.log('hospital', response)
    const hospitals = response.data.items
    yield put({ type: HospitalTypes.GET_HOSPITALS_SUCCESS, hospitals })
  } catch (err) {
    console.log(err)
    yield put({ type: HospitalTypes.GET_HOSPITALS_FAILURE })
  }
}

export function* getNearbyHospitals(api, action) {
  const location = action.position
  try {
    const params = {
      page: 1,
      size: 10,
      sort: '-createdAt',
      location
    }
    const response = yield call(api.getHospitals, params)
    const nearbyHospitals = response.data.items
    yield put({ type: HospitalTypes.GET_NEARBY_HOSPITALS_SUCCESS, nearbyHospitals })
  } catch (err) {
    console.log(err)
    yield put({ type: HospitalTypes.GET_NEARBY_HOSPITALS_FAILURE })
  }
}