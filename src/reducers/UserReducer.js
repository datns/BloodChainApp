import Immutable from 'seamless-immutable';
import { UserTypes } from '../types';

const initialState = Immutable({
  user: {},
  userFetching: false,
  error: false
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
    default: return state
  }
}