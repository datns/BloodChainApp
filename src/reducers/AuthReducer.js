import Immutable from 'seamless-immutable';
import { AuthTypes } from '../types';

const initialState = Immutable({
  loading: false,
  accessToken: null,
  error: false
})

export default (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN: return state.merge({ loading: true })
    case AuthTypes.LOGIN_SUCCESS:
      return state.merge({ loading: false, accessToken: action.accessToken })
    case AuthTypes.LOGIN_FAILURE: return state.merge({ loading: false, error: true })
    case AuthTypes.RELOGIN: return state.merge({
      accessToken: action.accessToken
    })
    default: return state
  }
}