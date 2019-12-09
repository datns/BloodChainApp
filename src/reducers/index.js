import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CampaignReducer from './CampaignReducer';
import BloodBankReducer from './BloodBankReducer';
import BloodCampReducer from './BloodCampReducer';
import BloodSeparationReducer from './BloodSeparationReducer';
import BloodTestReducer from './BloodTestReducer';
import HospitalReducer from './HospitalReducer';
import LocationReducer from './LocationReducer';
import UserReducer from './UserReducer';
import BloodPackReducer from './BloodPackReducer';
import RewardReducer from './RewardReducer';

export default combineReducers({
  auth: AuthReducer,
  campaign: CampaignReducer,
  bloodBank: BloodBankReducer,
  bloodCamp: BloodCampReducer,
  bloodSeparation: BloodSeparationReducer,
  bloodTest: BloodTestReducer,
  hospital: HospitalReducer,
  location: LocationReducer,
  user: UserReducer,
  bloodPack: BloodPackReducer,
  reward: RewardReducer
})