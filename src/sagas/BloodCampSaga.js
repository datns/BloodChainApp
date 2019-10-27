import { BloodCampTypes } from '../types';

import { put, call, select } from 'redux-saga/effects'

export const getCurrentLocations = (state) => state.bloodCamp && state.bloodCamp.bloodCamps
export function* getBloodCamps(api, action) {
  try {
    const { page } = action;
    const currents = yield select(getCurrentLocations)
    const params = {
      page,
      size: 5,
      sort: '-createdAt',
    }
    const response = yield call(api.getBloodCamps, params)
    const bloodCamps = page === 1 ? [...response.data.items] : [...currents, ...response.data.items]
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

export function* getBloodCampsByName(api, action) {
  try {
    const { name } = action
    const params = {
      page: 1,
      size: 10,
      sort: '-createdAt',
      name
    }
    const response = yield call(api.getBloodCamps, params)
    const searchBloodCamps = response.data.items
    yield put({ type: BloodCampTypes.GET_BLOOD_CAMPS_BY_NAME_SUCCESS, searchBloodCamps })
  }
  catch (err) {
    yield put({ type: BloodCampTypes.GET_BLOOD_CAMPS_BY_NAME_FAILURE })
  }
}