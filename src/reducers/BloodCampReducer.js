import Immutable from 'seamless-immutable';
import { BloodCampTypes } from '../types';

const initialState = Immutable({
  bloodCamps: null,
  fetching: false,
  error: false,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case BloodCampTypes.GET_BLOOD_CAMPS:
      return state.merge({ fetching: true })
    case BloodCampTypes.GET_BLOOD_CAMPS_SUCCESS:
      return state.merge({ fetching: false, bloodCamps: action.bloodCamps, error: false })
    case BloodCampTypes.GET_BLOOD_CAMPS_FAILURE:
      return state.merge({ fetching: false, error: true })
    default: return state
  }
}