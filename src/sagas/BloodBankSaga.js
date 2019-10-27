import { BloodBankTypes } from '../types';

import { put, call, select } from 'redux-saga/effects'

export const getCurrentLocations = (state) => state.bloodBank && state.bloodBank.bloodBanks
export function* getBloodBanks(api, action) {
  try {
    const { page } = action
    const currents = yield select(getCurrentLocations)
    const params = {
      page,
      size: 5,
      sort: '-createdAt'
    }
    const response = yield call(api.getBloodBanks, params)
    console.log('bank', response)
    const bloodBanks = page === 1 ? [...response.data.items] : [...currents, ...response.data.items]
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

export function* getBloodBanksByName(api, action) {
  try {
    const { name } = action
    const params = {
      page: 1,
      size: 10,
      sort: '-createdAt',
      name
    }
    const response = yield call(api.getBloodBanks, params)
    const searchBloodBanks = response.data.items
    yield put({ type: BloodBankTypes.GET_BLOOD_BANKS_BY_NAME_SUCCESS, searchBloodBanks })
  }
  catch (err) {
    yield put({ type: BloodBankTypes.GET_BLOOD_BANKS_BY_NAME_FAILURE })
  }
}