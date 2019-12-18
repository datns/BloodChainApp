import { BloodPackTypes } from '../types';

import { put, call, select } from 'redux-saga/effects'

import { convertTranferHistories } from '../utils/Helpers';
import { BloodPackActions } from '../actions';

export const getCurrentLocations = (state) => state.bloodPack && state.bloodPack.bloodPacks
export function* getBloodPacks(api, action) {
  try {
    const { page } = action;
    const currents = yield select(getCurrentLocations)
    const params = {
      page,
      size: 5,
      sort: '-createdAt',
    }
    const response = yield call(api.getBloodPacks, params)
    const bloodPacks = page === 1 ? [...response.data.items] : [...currents, ...response.data.items]
    const total = response.data.pagination.totalItems;
    yield put({ type: BloodPackTypes.GET_BLOOD_PACKS_SUCCESS, bloodPacks, total })
  } catch (err) {
    yield put({ type: BloodPackTypes.GET_BLOOD_PACKS_FAILURE })
  }
}

export function* getTransferHistories(api, action) {
  try {
    const response = yield call(api.getTransferHistories, action.id)
    console.log('bloodPack', response)
    const transferHistories = convertTranferHistories(response.data)
    yield put({ type: BloodPackTypes.GET_TRANSFER_HISTORIES_SUCCESS, transferHistories })
  }
  catch (err) {
    yield put({ type: BloodPackTypes.GET_TRANSFER_HISTORIES_FAILURE })
    console.log(err)
  }
}
