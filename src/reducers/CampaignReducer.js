import Immutable from 'seamless-immutable';
import { CampaignTypes } from '../types';

const initialState = Immutable({
  campaigns: [],
  fetching: false,
  error: false,
  searchCampaigns: [],
  searchFetching: false,
  searchError: false
})

export default (state = initialState, action) => {
  switch (action.type) {
    case CampaignTypes.GET_CAMPAIGNS:
      return state.merge({ fetching: true })
    case CampaignTypes.GET_CAMPAIGNS_SUCCESS:
      return state.merge({ fetching: false, campaigns: action.campaigns, error: false })
    case CampaignTypes.GET_CAMPAIGNS_FAILURE:
      return state.merge({ fetching: false, error: true })

    case CampaignTypes.GET_CAMPAIGNS_BY_NAME:
      return state.merge({ searchFetching: true });
    case CampaignTypes.GET_CAMPAIGNS_BY_NAME_SUCCESS:
      return state.merge({ searchFetching: false, searchCampaigns: action.searchCampaigns, searchError: false });
    case CampaignTypes.GET_CAMPAIGNS_BY_NAME_FAILURE:
      return state.merge({ searchFetching: false, searchError: true })
    default: return state
  }
}