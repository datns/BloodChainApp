import Immutable from 'seamless-immutable';
import { BloodBankTypes } from '../types';

const initialState = Immutable({
  bloodBanks: [],
  fetching: false,
  error: false,

  nearbyBloodBanks: [],
  nearbyFetching: false,
  nearbyError: false,

  searchBloodBanks: [],
  searchFetching: false,
  searchError: false
})

export default (state = initialState, action) => {
  switch (action.type) {
    case BloodBankTypes.GET_BLOOD_BANKS:
      return state.merge({ fetching: true })
    case BloodBankTypes.GET_BLOOD_BANKS_SUCCESS:
      return state.merge({ fetching: false, bloodBanks: action.bloodBanks, error: false })
    case BloodBankTypes.GET_BLOOD_BANKS_FAILURE:
      return state.merge({ fetching: false, error: true })

    case BloodBankTypes.GET_NEARBY_BLOOD_BANKS:
      return state.merge({ nearbyFetching: true })
    case BloodBankTypes.GET_NEARBY_BLOOD_BANKS_SUCCESS:
      return state.merge({ nearbyFetching: false, nearbyBloodBanks: action.nearbyBloodBanks, nearbyError: false })
    case BloodBankTypes.GET_NEARBY_BLOOD_BANKS_FAILURE:
      return state.merge({ nearbyFetching: false, nearbyError: true })

    case BloodBankTypes.GET_BLOOD_BANKS_BY_NAME:
      return state.merge({ searchFetching: true })
    case BloodBankTypes.GET_BLOOD_BANKS_BY_NAME_SUCCESS:
      return state.merge({ searchFetching: false, searchBloodBanks: action.searchBloodBanks, searchError: false })
    case BloodBankTypes.GET_BLOOD_BANKS_BY_NAME_FAILURE:
      return state.merge({ searchFetching: false, searchError: true })
    default: return state
  }
}