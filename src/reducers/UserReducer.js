import Immutable from 'seamless-immutable';
import { UserTypes } from '../types';

const initialState = Immutable({
  user: {},
  userFetching: false,
  error: false,
  point: 0,
  pointFetching: false,
  pointError: false,
  pointHistories: [],
  historiesFetching: false,
  historiesError: false,
  language: 'vi'
})

export default (state = initialState, action) => {
  switch (action.type) {
    case UserTypes.GET_USER_INFO: {
      return state.merge({ userFetching: true })
    }
    case UserTypes.GET_USER_INFO_SUCCESS: {
      return state.merge({ userFetching: true, user: action.user, error: false })
    }
    case UserTypes.GET_USER_INFO_FAILURE: {
      return state.merge({ userFetching: false, error: true })
    }

    case UserTypes.GET_USER_POINT:
      return state.merge({ pointFetching: true })
    case UserTypes.GET_USER_POINT_SUCCESS:
      return state.merge({ pointFetching: false, point: action.point, pointError: false })
    case UserTypes.GET_USER_POINT_FAILURE:
      return state.merge({ pointFetching: false, pointError: true })

    case UserTypes.GET_POINTS_HISTORIES:
      return state.merge({ historiesFetching: true })
    case UserTypes.GET_POINTS_HISTORIES_SUCCESS:
      return state.merge({ historiesFetching: false, pointHistories: action.pointHistories, historiesError: false })
    case UserTypes.GET_POINTS_HISTORIES_FAILURE:
      return state.merge({ historiesFetching: false, historiesError: true })

    case UserTypes.SET_LANGUAGE:
      return state.merge({ language: action.language })
    default: return state
  }
}