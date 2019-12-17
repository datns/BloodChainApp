import { BloodSeparationTypes } from '../types';

import { put, call, select } from 'redux-saga/effects'

export const getCurrentLocations = (state) => state.bloodSeparation && state.bloodSeparation.bloodSeparations
export function* getBloodSeparations(api, action) {
  try {
    const { page } = action
    const currents = yield select(getCurrentLocations)
    const params = {
      page,
      size: 5,
      sort: '-createdAt'
    }
    const response = yield call(api.getBloodSeparations, params)
    console.log('separation', response)
    const bloodSeparations = page === 1 ? [...response.data.items] : [...currents, ...response.data.items]
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
    console.log('nearby separation', response)
    yield put({ type: BloodSeparationTypes.GET_NEARBY_BLOOD_SEPARATIONS_SUCCESS, nearbyBloodSeparations })
  } catch (err) {
    console.log(err)
    yield put({ type: BloodSeparationTypes.GET_NEARBY_BLOOD_SEPARATIONS_FAILURE })
  }
}

export function* getBloodSeparationsByName(api, action) {
  try {
    const { name } = action;
    const params = {
      page: 1,
      size: 10,
      sort: '-createdAt',
      name
    }
    const response = yield call(api.getBloodSeparations, params)
    const searchBloodSeparations = response.data.items
    yield put({ type: BloodSeparationTypes.GET_BLOOD_SEPARATION_BY_NAME_SUCCESS, searchBloodSeparations })
  }
  catch (err) {
    yield put({ type: BloodSeparationTypes.GET_BLOOD_SEPARATION_BY_NAME_FAILURE })
  }
}