import { RewardTypes, UserTypes } from '../types';

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

export function* redeemVoucher(api, action) {
  try {
    const response = yield call(api.redeemVoucher, action.id);
    const voucher = response.data
    yield put({ type: RewardTypes.REDEEM_VOUCHER_SUCCESS, voucher })
    yield put({ type: UserTypes.GET_USER_POINT })
    yield put({ type: UserTypes.GET_POINTS_HISTORIES })
    yield put({ type: RewardTypes.GET_VOUCHERS })
  }
  catch (err) {
    console.log('redeem', err)
    yield put({ type: RewardTypes.REDEEM_VOUCHER_FAILURE })
  }
}

export function* redeemEthereum(api, action) {
  try {
    const response = yield call(api.redeemEthereum, action.planName, action.address);
    const ethereum = response.data
    yield put({ type: RewardTypes.REDEEM_ETHEREUM_SUCCESS, ethereum })
    yield put({ type: UserTypes.GET_USER_POINT })
    yield put({ type: UserTypes.GET_POINTS_HISTORIES })
  }
  catch (err) {
    console.log('redeem', err)
    yield put({ type: RewardTypes.REDEEM_ETHEREUM_FAILURE })
  }
}
