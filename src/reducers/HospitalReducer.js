import Immutable from 'seamless-immutable';
import { HospitalTypes } from '../types';

const initialState = Immutable({
  hospitals: null,
  fetching: false,
  error: false,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case HospitalTypes.GET_HOSPITALS:
      return state.merge({ fetching: true })
    case HospitalTypes.GET_HOSPITALS_SUCCESS:
      return state.merge({ fetching: false, hospitals: action.hospitals, error: false })
    case HospitalTypes.GET_HOSPITALS_FAILURE:
      return state.merge({ fetching: false, error: true })
    default: return state
  }
}