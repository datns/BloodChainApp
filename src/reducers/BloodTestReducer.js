import Immutable from 'seamless-immutable';
import { BloodTestTypes } from '../types';

const initialState = Immutable({
  bloodTests: null,
  fetching: false,
  error: false,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case BloodTestTypes.GET_BLOOD_TESTS:
      return state.merge({ fetching: true })
    case BloodTestTypes.GET_BLOOD_TESTS_SUCCESS:
      return state.merge({ fetching: false, bloodTests: action.bloodTests, error: false })
    case BloodTestTypes.GET_BLOOD_TESTS_FAILURE:
      return state.merge({ fetching: false, error: true })
    default: return state
  }
}