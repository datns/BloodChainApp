import Immutable from 'seamless-immutable';
import { BloodPackTypes } from '../types';

const initialState = Immutable({
  bloodPacks: [],
  fetching: false,
  error: false,
  total: 0,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case BloodPackTypes.GET_BLOOD_PACKS:
      return state.merge({ fetching: true })
    case BloodPackTypes.GET_BLOOD_PACKS_SUCCESS:
      return state.merge({ fetching: false, bloodPacks: action.bloodPacks, total: action.total, error: false })
    case BloodPackTypes.GET_BLOOD_PACKS_FAILURE:
      return state.merge({ fetching: false, error: true })
    default: return state
  }
}