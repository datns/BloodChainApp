import { HospitalTypes } from '../types';

import { put, call, select } from 'redux-saga/effects'

export const getCurrentLocations = (state) => state.hospital && state.hospital.hospitals
export function* getHospitals(api, action) {
  try {
    const { page } = action
    const currents = yield select(getCurrentLocations)
    const params = {
      page,
      size: 5,
      sort: '-createdAt'
    }
    const response = yield call(api.getHospitals, params)
    console.log('hospital', response)
    const hospitals = page === 1 ? [...response.data.items] : [...currents, ...response.data.items]
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

export function* getHospitalsByName(api, action) {
  try {
    const { name } = action;
    const params = {
      page: 1,
      size: 10,
      sort: '-createdAt',
      name
    }
    const response = yield call(api.getHospitals, params)
    const searchHospitals = response.data.items
    yield put({ type: HospitalTypes.GET_HOSPITALS_BY_NAME_SUCCESS, searchHospitals })
  }
  catch (err) {
    yield put({ type: HospitalTypes.GET_HOSPITALS_BY_NAME_FAILURE })
  }
}