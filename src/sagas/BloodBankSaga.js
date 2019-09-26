import { BloodBankTypes } from '../types';

import { put, call } from 'redux-saga/effects'

export function* getBloodBanks(api) {
  try {
    const params = {
      page: 1,
      size: 10,
      sort: '-createdAt'
    }
    const response = yield call(api.getBloodBanks, params)
    console.log('bank', response)
    const bloodBanks = response.data.items
    yield put({ type: BloodBankTypes.GET_BLOOD_BANKS_SUCCESS, bloodBanks })
  } catch (err) {
    console.log(err)
    yield put({ type: BloodBankTypes.GET_BLOOD_BANKS_FAILURE })
  }
}

export function* getNearbyBloodBanks(api, action) {
  const location = action.position;
  try {
    const params = {
      page: 1,
      size: 10,
      sort: '-createdAt',
      location
    }
    const response = yield call(api.getBloodBanks, params)
    console.log('bank', response)
    const nearbyBloodBanks = response.data.items
    yield put({ type: BloodBankTypes.GET_NEARBY_BLOOD_BANKS_SUCCESS, nearbyBloodBanks })
  } catch (err) {
    console.log(err)
    yield put({ type: BloodBankTypes.GET_NEARBY_BLOOD_BANKS_FAILURE })
  }
}