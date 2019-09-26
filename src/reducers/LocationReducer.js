import Immutable from 'seamless-immutable';
import { LocationTypes } from '../types';

const initialState = Immutable({
  selectedLocation: null
})

export default (state = initialState, action) => {
  switch (action.type) {
    case LocationTypes.SELECT_LOCATION: {
      return state.merge({ selectedLocation: action.location })
    }
    default: return state
  }
}