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