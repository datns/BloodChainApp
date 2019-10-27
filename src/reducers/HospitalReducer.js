import Immutable from 'seamless-immutable';
import { HospitalTypes } from '../types';

const initialState = Immutable({
  hospitals: [],
  fetching: false,
  error: false,

  nearbyHospitals: [],
  nearbyFetching: false,
  nearbyError: false,

  searchHospitals: [],
  searchFetching: false,
  searchError: false
})

export default (state = initialState, action) => {
  switch (action.type) {
    case HospitalTypes.GET_HOSPITALS:
      return state.merge({ fetching: true })
    case HospitalTypes.GET_HOSPITALS_SUCCESS:
      return state.merge({ fetching: false, hospitals: action.hospitals, error: false })
    case HospitalTypes.GET_HOSPITALS_FAILURE:
      return state.merge({ fetching: false, error: true })

    case HospitalTypes.GET_NEARBY_HOSPITALS:
      return state.merge({ nearbyFetching: true })
    case HospitalTypes.GET_NEARBY_HOSPITALS_SUCCESS:
      return state.merge({ nearbyFetching: false, nearbyHospitals: action.nearbyHospitals, nearbyError: false })
    case HospitalTypes.GET_NEARBY_HOSPITALS_FAILURE:
      return state.merge({ nearbyFetching: false, nearbyError: true })

    case HospitalTypes.GET_HOSPITALS_BY_NAME:
      return state.merge({ searchFetching: false })
    case HospitalTypes.GET_HOSPITALS_BY_NAME_SUCCESS:
      return state.merge({ searchFetching: false, searchHospitals: action.searchHospitals, searchError: false })
    case HospitalTypes.GET_HOSPITALS_BY_NAME_FAILURE:
      return state.merge({ searchFetching: false, searchError: true })
    default: return state
  }
}