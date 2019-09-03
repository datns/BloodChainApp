import Immutable from 'seamless-immutable';
import { AuthTypes } from '../types';

const initialState = Immutable({
  loading: false,
  loggedIn: false,
  accessToken: null,
  error: null
})

export default (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN: return state.merge({ loading: true })
    case AuthTypes.LOGIN_SUCCESS:
      return state.merge({ loading: false, accessToken: action.accessToken })
    case AuthTypes.LOGIN_FAILURE:
    default: return state
  }
}