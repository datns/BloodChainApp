import { LocationTypes } from '../types';

const selectLocation = (location) => ({
  type: LocationTypes.SELECT_LOCATION, location
})

export {
  selectLocation
}