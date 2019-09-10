import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CampaignReducer from './CampaignReducer';

export default combineReducers({
  auth: AuthReducer,
  campaign: CampaignReducer
})