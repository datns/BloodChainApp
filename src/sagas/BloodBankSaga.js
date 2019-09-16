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