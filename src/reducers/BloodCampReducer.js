import Immutable from 'seamless-immutable';
import { BloodCampTypes } from '../types';

const initialState = Immutable({
  bloodCamps: [],
  fetching: false,
  error: false,
  nearbyBloodCamps: [],
  nearbyFetching: false,
  nearbyError: false
})

export default (state = initialState, action) => {
  switch (action.type) {
    case BloodCampTypes.GET_BLOOD_CAMPS:
      return state.merge({ fetching: true })
    case BloodCampTypes.GET_BLOOD_CAMPS_SUCCESS:
      return state.merge({ fetching: false, bloodCamps: action.bloodCamps, error: false })
    case BloodCampTypes.GET_BLOOD_CAMPS_FAILURE:
      return state.merge({ fetching: false, error: true })

    case BloodCampTypes.GET_NEARBY_BLOOD_CAMPS:
      return state.merge({ nearbyFetching: true })
    case BloodCampTypes.GET_NEARBY_BLOOD_CAMPS_SUCCESS:
      return state.merge({ nearbyFetching: false, nearbyBloodCamps: action.nearbyBloodCamps, nearbyError: false })
    case BloodCampTypes.GET_NEARBY_BLOOD_CAMPS_FAILURE:
      return state.merge({ nearbyFetching: false, nearbyError: true })
    default: return state
  }
}