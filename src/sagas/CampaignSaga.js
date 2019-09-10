import { CampaignTypes } from '../types';

import { put, call } from 'redux-saga/effects'

export function* getCampaigns(api) {
  console.log(api)
  try {
    const params = {
      page: 1,
      size: 10,
      sort: '-createdAt'
    }
    const response = yield call(api.getCampaigns, params)
    // console.log(response)
    const campaigns = response.data.items
    yield put({ type: CampaignTypes.GET_CAMPAIGNS_SUCCESS, campaigns })
  } catch (err) {
    console.log(err)
    yield put({ type: CampaignTypes.GET_CAMPAIGNS_FAILURE })
  }
}