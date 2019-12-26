import Immutable from 'seamless-immutable';
import { BloodCampTypes } from '../types';

const initialState = Immutable({
  bloodCamps: [],
  fetching: false,
  error: false,
  nearbyBloodCamps: [],
  nearbyFetching: false,
  nearbyError: false,
  searchBloodCamps: [],
  searchFetching: false,
  searchError: false,
  detail: {},
  detailFetching: false,
  detailError: false
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

    case BloodCampTypes.GET_BLOOD_CAMPS_BY_NAME:
      return state.merge({ searchFetching: true })
    case BloodCampTypes.GET_BLOOD_CAMPS_BY_NAME_SUCCESS:
      return state.merge({ searchFetching: false, searchBloodCamps: action.searchBloodCamps, searchError: false })
    case BloodCampTypes.GET_BLOOD_CAMPS_BY_NAME_FAILURE:
      return state.merge({ searchFetching: false, searchError: true })

    case BloodCampTypes.GET_BLOOD_CAMP_DETAIL:
      return state.merge({ detailFetching: true })
    case BloodCampTypes.GET_BLOOD_CAMP_DETAIL_SUCCESS:
      return state.merge({ detailFetching: false, detail: action.detail, detailError: false })
    case BloodCampTypes.GET_BLOOD_CAMP_DETAIL_FAILURE:
      return state.merge({ detailFetching: false, detailError: true })
    default: return state
  }
}