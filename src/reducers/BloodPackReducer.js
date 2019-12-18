import Immutable from 'seamless-immutable';
import { BloodPackTypes } from '../types';

const initialState = Immutable({
  bloodPacks: [],
  fetching: false,
  error: false,
  total: 0,
  transferHistories: [],
  transferFetching: false,
  transferError: false,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case BloodPackTypes.GET_BLOOD_PACKS:
      return state.merge({ fetching: true })
    case BloodPackTypes.GET_BLOOD_PACKS_SUCCESS:
      return state.merge({ fetching: false, bloodPacks: action.bloodPacks, total: action.total, error: false })
    case BloodPackTypes.GET_BLOOD_PACKS_FAILURE:
      return state.merge({ fetching: false, error: true })

    case BloodPackTypes.GET_TRANSFER_HISTORIES:
      return state.merge({ transferFetching: true })
    case BloodPackTypes.GET_TRANSFER_HISTORIES_SUCCESS:
      return state.merge({ transferFetching: false, transferHistories: action.transferHistories, transferError: false })
    case BloodPackTypes.GET_TRANSFER_HISTORIES_FAILURE:
      return state.merge({ transferFetching: false, transferError: true })
    default: return state
  }
}