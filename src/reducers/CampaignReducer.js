import Immutable from 'seamless-immutable';
import { CampaignTypes } from '../types';

const initialState = Immutable({
  campaigns: [],
  fetching: false,
  error: false,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case CampaignTypes.GET_CAMPAIGNS:
      return state.merge({ fetching: true })
    case CampaignTypes.GET_CAMPAIGNS_SUCCESS:
      return state.merge({ fetching: false, campaigns: action.campaigns, error: false })
    case CampaignTypes.GET_CAMPAIGNS_FAILURE:
      return state.merge({ fetching: false, error: true })
    default: return state
  }
}