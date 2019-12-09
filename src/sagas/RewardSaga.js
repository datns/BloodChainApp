import { RewardTypes } from '../types';

import { put, call } from 'redux-saga/effects'

export function* getVouchers(api) {
  try {
    const params = {
      page: 1,
      size: 12,
      sort: '-createdAt'
    }
    const response = yield call(api.getVouchers, params)
    const vouchers = response.data.items
    yield put({ type: RewardTypes.GET_VOUCHERS_SUCCESS, vouchers })
  } catch (err) {
    console.log(err)
    yield put({ type: RewardTypes.GET_VOUCHERS_FAILURE })
  }
}

export function* getEthereums(api) {
  try {
    const response = yield call(api.getEthereumPlan)

    const ethereums = response.data
    yield put({ type: RewardTypes.GET_ETHEREUMS_SUCCESS, ethereums })
  }
  catch (err) {
    console.log('eth', err)
    yield put({ type: RewardTypes.GET_ETHEREUMS_FAILURE })
  }
}