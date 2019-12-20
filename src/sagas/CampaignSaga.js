import { CampaignTypes } from '../types';

import { put, call, select } from 'redux-saga/effects'

export const getCurrenCampaigns = (state) => state.campaign && state.campaign.campaigns
export function* getCampaigns(api, action) {
  try {
    const { page } = action;
    const params = {
      page,
      size: 10,
      sort: '-createdAt'
    }
    const currents = yield select(getCurrenCampaigns);
    const response = yield call(api.getCampaigns, params)
    // console.log(response)
    const campaigns = page === 1 ? [...response.data.items] : [...currents, ...response.data.items]
    yield put({ type: CampaignTypes.GET_CAMPAIGNS_SUCCESS, campaigns })
  } catch (err) {
    console.log(err)
    yield put({ type: CampaignTypes.GET_CAMPAIGNS_FAILURE })
  }
}

export function* getCampaignsByName(api, action) {
  try {
    const { name } = action
    const params = {
      page: 1,
      size: 10,
      sort: '-createdAt',
      name
    }
    const response = yield call(api.getCampaigns, params)
    const searchCampaigns = response.data.items
    yield put({ type: CampaignTypes.GET_CAMPAIGNS_BY_NAME_SUCCESS, searchCampaigns })
  }
  catch (err) {
    yield put({ type: CampaignTypes.GET_CAMPAIGNS_BY_NAME_FAILURE })
  }
}