import Immutable from 'seamless-immutable';
import { BloodTestTypes } from '../types';

const initialState = Immutable({
  bloodTests: [],
  fetching: false,
  error: false,

  nearbyBloodTests: [],
  nearbyFetching: false,
  nearbyError: false
})

export default (state = initialState, action) => {
  switch (action.type) {
    case BloodTestTypes.GET_BLOOD_TESTS:
      return state.merge({ fetching: true })
    case BloodTestTypes.GET_BLOOD_TESTS_SUCCESS:
      return state.merge({ fetching: false, bloodTests: action.bloodTests, error: false })
    case BloodTestTypes.GET_BLOOD_TESTS_FAILURE:
      return state.merge({ fetching: false, error: true })

    case BloodTestTypes.GET_NEARBY_BLOOD_TESTS:
      return state.merge({ nearbyFetching: true })
    case BloodTestTypes.GET_NEARBY_BLOOD_TESTS_SUCCESS:
      return state.merge({ nearbyFetching: false, nearbyBloodTests: action.nearbyBloodTests, nearbyError: false })
    case BloodTestTypes.GET_NEARBY_BLOOD_TESTS_FAILURE:
      return state.merge({ nearbyFetching: false, nearbyError: true })
    default: return state
  }
}