import Immutable from 'seamless-immutable';
import { BloodSeparationTypes } from '../types';

const initialState = Immutable({
  bloodSeparations: [],
  fetching: false,
  error: false,

  nearbyBloodSeparations: [],
  nearbyFetching: false,
  nearbyError: false,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case BloodSeparationTypes.GET_BLOOD_SEPARATIONS:
      return state.merge({ fetching: true })
    case BloodSeparationTypes.GET_BLOOD_SEPARATIONS_SUCCESS:
      return state.merge({ fetching: false, bloodSeparations: action.bloodSeparations, error: false })
    case BloodSeparationTypes.GET_BLOOD_SEPARATIONS_FAILURE:
      return state.merge({ fetching: false, error: true })

    case BloodSeparationTypes.GET_NEARBY_BLOOD_SEPARATIONS:
      return state.merge({ nearbyFetching: true })
    case BloodSeparationTypes.GET_BLOOD_SEPARATIONS_SUCCESS:
      return state.merge({ nearbyFetching: false, nearbyBloodSeparations: action.nearbyBloodSeparations, nearbyError: false })
    case BloodSeparationTypes.GET_BLOOD_SEPARATIONS_FAILURE:
      return state.merge({ nearbyFetching: false, nearbyError: true })
    default: return state
  }
}