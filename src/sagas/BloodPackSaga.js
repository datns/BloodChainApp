import { BloodPackTypes } from '../types';

import { put, call, select } from 'redux-saga/effects'

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
    console.log('pack res', response)
    const bloodPacks = page === 1 ? [...response.data.items] : [...currents, ...response.data.items]
    const total = response.data.pagination.totalItems;
    yield put({ type: BloodPackTypes.GET_BLOOD_PACKS_SUCCESS, bloodPacks, total })
  } catch (err) {
    yield put({ type: BloodPackTypes.GET_BLOOD_PACKS_FAILURE })
  }
}
