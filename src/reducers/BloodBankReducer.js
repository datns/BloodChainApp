import Immutable from 'seamless-immutable';
import { BloodBankTypes } from '../types';

const initialState = Immutable({
  bloodBanks: null,
  fetching: false,
  error: false,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case BloodBankTypes.GET_BLOOD_BANKS:
      return state.merge({ fetching: true })
    case BloodBankTypes.GET_BLOOD_BANKS_SUCCESS:
      return state.merge({ fetching: false, bloodBanks: action.bloodBanks, error: false })
    case BloodBankTypes.GET_BLOOD_BANKS_FAILURE:
      return state.merge({ fetching: false, error: true })
    default: return state
  }
}